<script>
import UIkit from "uikit";

export default {
  name: "ContactForm",
  props: {
    customer: {
      type: String,
      default: "",
    },
    location: {
      type: [Number, String],
      default: "",
    },
    interest: {
      type: [Number, String],
      default: "",
    },
    customerData: {
      type: Object,
    },
    loading: Boolean,
  },
  emits: ["update:customerData"],
  data: () => {
    return {
      locations: null,
      contactValues: {
        agency_id: "1",
        interested_in: "",
        interested_in2: "",
        attention: "1",
        nachricht: "",
        dsgvo: false,
        newsletter: false,
        customer_group: "0",
        sites: "",
        salutation: "",
        firstname: "",
        lastname: "",
        street: "",
        no: "",
        zip: "",
        city: "",
        phone: "",
        phone2: "",
        email: "",
        birthday: "",
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
        utm_term: "",
        utm_content: "",
      },
    };
  },
  created() {
    UIkit.scroll("", { offset: 90 }).scrollTo(UIkit.util.$("div#contactForm"));
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.contactValues.interested_in = this.interest;
      this.contactValues.sites = this.location;
      var a = e.target,
        self = this,
        v = self.$parent.onSubmit(e);

      if (!v) {
        return false;
      }

      // SEND CONTACT
      this.$emit("update:loading", true);
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/contact`;
      fetch(url, {
        method: "POST",
        headers: {
          "X-Joomla-Token": `${process.env.VUE_APP_JOOMLA_TOKEN}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.contactValues),
      })
        .then(async (response) => {
          const data = await response.json();
          const message = (data && data.message) || response.statusText;

          if (!response.ok) {
            UIkit.notification({
              message: message,
              timeout: 2000,
              status: "danger",
              pos: "top-left",
            });
            return Promise.reject(message);
          }

          this.$emit("update:loading", false);
          a.reset();

          UIkit.notification({
            message: data.data.attributes.message,
            timeout: 3000,
            status: "success",
            pos: "top-left",
          });
          setTimeout(function () {
            window.location.href = data.data.attributes.redirect;
          }, 4000);
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<template>
  <div class="uk-animation-slide-bottom-small" id="contactForm">
    <p>BITTE EINEN TEXT FÜR ANFRAGEN.</p>
    <form class="uk-form uk-panel js-form-form" @submit="onSubmit" novalidate>
      <div class="uk-grid-small uk-child-width-1-1" uk-grid>
        <input
          type="hidden"
          id="agency_id"
          name="agency_id"
          v-model="contactValues.agency_id"
        />
        <input
          type="hidden"
          id="interested_in"
          name="interested_in"
          v-model="contactValues.interested_in"
        />
        <input
          type="hidden"
          id="interested_in2"
          name="interested_in2"
          v-model="contactValues.interested_in2"
        />
        <input
          type="hidden"
          id="sites"
          name="sites"
          v-model="contactValues.sites"
        />
        <div>
          <div class="uk-form-controls uk-inline uk-display-block">
            <select
              class="el-select uk-select"
              id="salutation"
              name="salutation"
              v-model="contactValues.salutation"
              data-message="Anrede"
              required
            >
              <option value="" disabled>Anrede auswählen</option>
              <option value="Herr">Herr</option>
              <option value="Frau">Frau</option>
              <option value="Divers">Divers</option>
            </select>
          </div>
        </div>
        <div>
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="firstname"
              name="firstname"
              placeholder="Bitte geben Sie Ihren Vornamen ein. *"
              data-message="Vorname"
              v-model="contactValues.firstname"
              required
            />
          </div>
        </div>
        <div>
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="lastname"
              name="lastname"
              placeholder="Bitte geben Sie Ihren Nachnamen ein. *"
              data-message="Nachname"
              v-model="contactValues.lastname"
              required
            />
          </div>
        </div>
        <input
          type="hidden"
          id="street"
          name="street"
          v-model="contactValues.street"
        />
        <input type="hidden" id="no" name="no" v-model="contactValues.no" />
        <input type="hidden" id="zip" name="zip" v-model="contactValues.zip" />
        <input
          type="hidden"
          id="city"
          name="city"
          v-model="contactValues.city"
        />
        <div>
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="email"
              name="email"
              placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein. *"
              data-message="E-Mail-Adresse"
              v-model="contactValues.email"
              required
              type="email"
            />
          </div>
        </div>
        <input
          type="hidden"
          id="phone"
          name="phone"
          v-model="contactValues.phone"
        />
        <div>
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="phone2"
              name="phone2"
              placeholder="Ihre Mobilnummer für Rückfragen."
              v-model="contactValues.phone2"
            />
          </div>
        </div>
        <input
          type="hidden"
          id="birthday"
          name="birthday"
          v-model="contactValues.birthday"
        />
        <input
          type="hidden"
          id="utm_source"
          name="utm_source"
          v-model="contactValues.utm_source"
        />
        <input
          type="hidden"
          id="utm_medium"
          name="utm_medium"
          v-model="contactValues.utm_medium"
        />
        <input
          type="hidden"
          id="utm_campaign"
          name="utm_campaign"
          v-model="contactValues.utm_campaign"
        />
        <input
          type="hidden"
          id="utm_term"
          name="utm_term"
          v-model="contactValues.utm_term"
        />
        <input
          type="hidden"
          id="utm_content"
          name="utm_content"
          v-model="contactValues.utm_content"
        />
        <div>
          <div class="uk-form-controls uk-inline uk-display-block">
            <textarea
              class="el-input uk-textarea"
              id="nachricht"
              name="nachricht"
              placeholder="Ihre Nachricht"
              rows="5"
              v-model="contactValues.nachricht"
            ></textarea>
          </div>
        </div>
        <div>
          <div class="uk-form-controls uk-inline uk-display-block">
            <label class="uk-text-small"
              ><input
                class="el-input uk-checkbox"
                id="newsletter"
                name="newsletter"
                type="checkbox"
                v-model="contactValues.newsletter"
              />
              &nbsp;Ich willige ein, dass ich regelmäßig einen Newsletter von
              S-thetic erhalte.
            </label>
          </div>
        </div>
        <div>
          <div class="uk-form-controls uk-inline uk-display-block">
            <label class="uk-text-small"
              ><input
                class="el-input uk-checkbox"
                id="dsgvo"
                name="dsgvo"
                data-message="Datenschutz"
                required
                type="checkbox"
                v-model="contactValues.dsgvo"
              />
              Ich willige ein, dass meine Angaben zur Kontaktaufnahme und
              Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden.
              Die <a href="/datenschutz">Datenschutzbestimmungen</a> habe ich
              zur Kenntnis genommen.</label
            >
          </div>
        </div>
        <div>
          <p>
            <small
              >Hinweis: Diese Einwilligung können Sie in einer E-Mail an
              <a href="mailto:info@s-thetic.de">info@s-thetic.de</a>
              jederzeit mit Wirkung für die Zukunft widerrufen.</small
            >
          </p>
        </div>
        <div>
          <button
            class="el-button uk-button uk-button-primary"
            type="submit"
            id="kickpraxisform"
          >
            Anfrage senden
          </button>
        </div>
        <div class="message uk-margin uk-hidden"></div>
      </div>
    </form>
  </div>
</template>
