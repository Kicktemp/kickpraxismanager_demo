<script>
import UIkit from "uikit";

export default {
  name: "CustomerForm",
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
    from: {
      type: [Number, String],
      default: "",
    },
    until: {
      type: [Number, String],
      default: "",
    },
    resource: {
      type: [Number, String],
      default: "",
    },
    appointment_type_id: {
      type: [Number, Object],
      default: 0,
    },
    loading: Boolean,
  },
  emits: ["update:customerData"],
  data: () => {
    return {
      sending: false,
      appointment: {
        resource_id: null,
        appointment_type_id: null,
        from: "",
        until: "",
        comment: "",
        location: null,
        /*customer: {
          firstname: "Max",
          lastname: "Muster",
          email: "hello@kicktemp.com",
          privacy_accepted: 1,
          gender: "1",
          birthday: "1990-12-31",
          street: "Musterstraße",
          no: "42a",
          zip: "45690",
          city: "Musterstadt",
          phone: "+49 1234 5678-90",
          mobile: "+49 171 987654321",
          attention: 1,
          newsletter: false,
        },*/
        customer: {
          firstname: "",
          lastname: "",
          email: "",
          privacy_accepted: false,
          gender: "",
          birthday: "",
          street: "",
          no: "",
          zip: "",
          city: "",
          phone: "",
          mobile: "",
          attention: 0,
          newsletter: false,
        },
        interest_id: null,
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
        utm_term: "",
        utm_content: "",
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  created() {
    setTimeout(function () {
      UIkit.scroll("", { offset: 90 }).scrollTo(
        UIkit.util.$("div#customerForm")
      );
    }, 200);
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.sending) {
        return false;
      }
      this.sending = true;
      this.appointment.location = this.location;
      this.appointment.interest_id = this.interest;
      this.appointment.appointment_type_id = this.appointment_type_id.id;
      this.appointment.resource_id = this.resource;
      this.appointment.from = this.from;
      this.appointment.until = this.until;
      var a = e.target,
        self = this,
        v = self.$parent.onSubmit(e);

      if (!v) {
        this.sending = false;
        return false;
      }

      // SEND CONTACT
      this.$emit("update:loading", true);
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/request`;
      fetch(url, {
        method: "POST",
        headers: {
          "X-Joomla-Token": `${process.env.VUE_APP_JOOMLA_TOKEN}`,
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.appointment),
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
          this.sending = false;
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<template>
  <div class="uk-animation-slide-bottom-small" id="customerForm">
    <hr class="uk-animation-slide-bottom-small" />
    <p>Ihre persönlichen Daten</p>
    <form class="uk-form uk-panel js-form-form" @submit="onSubmit" novalidate>
      <div class="uk-margin">
        <div uk-grid>
          <div class="uk-width-1-5@m">
            <div class="uk-form-controls uk-inline uk-display-block">
              <select
                class="el-select uk-select"
                id="gender"
                v-model="appointment.customer.gender"
                data-message="Anrede"
                required
              >
                <option value="">Anrede auswählen</option>
                <option value="1">Herr</option>
                <option value="2">Frau</option>
                <option value="3">Divers</option>
              </select>
            </div>
          </div>
        </div>
        <div class="uk-margin" uk-grid>
          <div
            :class="{
              'uk-width-1-2@m': customer == 'old',
              'uk-width-1-3@m': customer == 'new',
            }"
          >
            <div class="uk-form-controls uk-inline uk-display-block">
              <input
                class="el-input uk-input"
                id="firstname"
                name="firstname"
                placeholder="Bitte geben Sie Ihren Vornamen ein. *"
                v-model="appointment.customer.firstname"
                data-message="Vorname"
                required
              />
            </div>
          </div>
          <div
            :class="{
              'uk-width-1-2@m': customer == 'old',
              'uk-width-1-3@m': customer == 'new',
            }"
          >
            <div class="uk-form-controls uk-inline uk-display-block">
              <input
                class="el-input uk-input"
                id="lastname"
                name="lastname"
                placeholder="Bitte geben Sie Ihren Nachnamen ein. *"
                v-model="appointment.customer.lastname"
                data-message="Nachname"
                required
              />
            </div>
          </div>
          <div class="uk-width-1-3@m" v-if="customer == 'new'">
            <div class="uk-form-controls uk-inline uk-display-block">
              <DatePicker
                v-model="appointment.customer.birthday"
                :model-config="modelConfig"
              >
                <template v-slot="{ inputValue, togglePopover }">
                  <div class="uk-inline uk-width-1-1">
                    <a
                      class="uk-form-icon"
                      @click="togglePopover()"
                      uk-icon="icon: calendar"
                    ></a>
                    <input
                      type="text"
                      :value="inputValue"
                      class="uk-input"
                      readonly
                      placeholder="Bitte geben Sie Ihr Geburtsdatum ein. *"
                      data-message="Geburtsdatum"
                      required
                    />
                  </div>
                </template>
              </DatePicker>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-margin" uk-grid>
        <div class="uk-width-1-2@m">
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="email"
              name="email"
              placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein. *"
              data-message="E-Mail-Adresse"
              v-model="appointment.customer.email"
              required
              type="email"
            />
          </div>
        </div>
        <div class="uk-width-1-2@m">
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="mobile"
              name="mobile"
              placeholder="Ihre Mobilnummer für Rückfragen."
              v-model="appointment.customer.mobile"
            />
          </div>
        </div>
      </div>
      <div class="uk-margin" uk-grid v-if="customer == 'new'">
        <div class="uk-width-2-3@m">
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="street"
              name="street"
              placeholder="Straße *"
              v-model="appointment.customer.street"
            />
          </div>
        </div>
        <div class="uk-width-1-3@m">
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="no"
              name="no"
              placeholder="Hausnummer"
              v-model="appointment.customer.no"
            />
          </div>
        </div>
      </div>
      <div class="uk-margin" uk-grid v-if="customer == 'new'">
        <div class="uk-width-1-3@m">
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="zip"
              name="zip"
              placeholder="PLZ *"
              v-model="appointment.customer.zip"
            />
          </div>
        </div>
        <div class="uk-width-2-3@m">
          <div class="uk-form-controls uk-inline uk-display-block">
            <input
              class="el-input uk-input"
              id="city"
              name="city"
              placeholder="Ort"
              v-model="appointment.customer.city"
            />
          </div>
        </div>
      </div>
      <div class="uk-form-controls uk-inline uk-display-block">
        <label class="uk-text-small"
          ><input
            class="uk-checkbox"
            type="checkbox"
            v-model="appointment.customer.newsletter"
          />
          Ich willige ein, dass ich regelmäßig einen Newsletter von S-thetic
          erhalte.
        </label>
      </div>
      <div class="uk-form-controls uk-inline uk-display-block">
        <label class="uk-text-small"
          ><input
            class="uk-checkbox"
            type="checkbox"
            v-model="appointment.customer.privacy_accepted"
            data-message="Datenschutz"
            required
          />
          Ich willige ein, dass meine Angaben zur Kontaktaufnahme und Zuordnung
          für eventuelle Rückfragen dauerhaft gespeichert werden. Die
          <a href="/datenschutz">Datenschutzbestimmungen</a> habe ich zur
          Kenntnis genommen.
        </label>
      </div>
      <div class="uk-margin">
        <p>
          <small
            >Hinweis: Diese Einwilligung können Sie in einer E-Mail an
            <a href="mailto:info@s-thetic.de" base="">info@s-thetic.de</a>
            jederzeit mit Wirkung für die Zukunft widerrufen.</small
          >
        </p>
      </div>
      <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
        <button
          class="el-button uk-button"
          type="submit"
          :class="{
            'uk-disabled': sending,
            'uk-button-primary': !sending,
            'uk-button-danger': sending,
          }"
        >
          Absenden
        </button>
      </div>
    </form>
    {{ appointment }}
  </div>
</template>
