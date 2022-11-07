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
        nachricht: "Hallo\nich heiße Test\n und du?",
        dsgvo: true,
        newsletter: true,
        customer_group: "0",
        sites: "",
        salutation: "Herr",
        firstname: "Niels",
        lastname: "Nübel",
        street: "",
        no: "",
        zip: "",
        city: "",
        phone: "",
        phone2: "017253216972",
        email: "hello@kicktemp.com",
        birthday: "",
        utm_source: "http://kickpraxismanager.kick4/de/newsletter",
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
  watch: {
    interest(newInterest, oldInterest) {
      if (newInterest != oldInterest && newInterest != 0) {
        this.contactValues.interested_in = newInterest;
      }
    },
    location(newLocation, oldLocation) {
      if (newLocation != oldLocation && newLocation != 0) {
        this.contactValues.sites = newLocation;
      }
    },
  },
  methods: {
    onSubmit(e) {
      this.contactValues.interested_in = this.interest;
      this.contactValues.sites = this.location;
      e.preventDefault();
      var a = e.target,
        self = this,
        n = UIkit.util.$(".message", a),
        v = true;

      UIkit.util.$$("[required]", a).forEach(function (el) {
        if (el.getAttribute("type") == "checkbox") {
          if (!el.checked) {
            self.addMessage(el, true);
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }

        if (el.getAttribute("type") == "radio") {
          var checked = false;
          UIkit.util
            .$$("input[name=" + el.getAttribute("name") + "]", a)
            .forEach(function (radio) {
              if (radio.checked) {
                checked = true;
              }
            });
          if (!checked) {
            self.addMessage(el, true);
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }

        // Inputs or Textarea
        if (
          (el.tagName == "INPUT" || el.tagName == "TEXTAREA") &&
          el.getAttribute("type") != "checkbox"
        ) {
          if (el.value.length < 1) {
            self.addMessage(el, true);
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }

        // Select
        if (el.tagName == "SELECT") {
          if (!el.value) {
            self.addMessage(el, true);
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }
      });

      UIkit.util.$$("input[type=email]", a).forEach(function (el) {
        var regex =
          // eslint-disable-next-line no-control-regex
          /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        if (el.value.length > 0) {
          if (!regex.test(el.value)) {
            self.addMessage(el, true, el.getAttribute("data-emailmessage"));
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }
      });

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
    addMessage(e, st, message) {
      var icon = document.createElement("span"),
        spans = e.parentNode.querySelectorAll("span.kickicon"),
        icons = e.parentNode.querySelectorAll(
          "span.uk-form-icon-flip:not(.kickicon)"
        ),
        m =
          typeof message !== "undefined"
            ? message
            : e.getAttribute("data-message");

      icon.setAttribute(
        "class",
        "uk-form-icon uk-text-" +
          (st ? "danger" : "success") +
          " uk-form-icon-flip kickicon"
      );
      icon.setAttribute("uk-icon", "icon: " + (st ? "close" : "check"));

      if (
        icons.length ||
        e.getAttribute("type") == "date" ||
        e.tagName == "SELECT"
      ) {
        icon.setAttribute("style", "right: 30px");
      }

      if (spans.length) {
        e.parentNode.removeChild(spans[0]);
      }

      UIkit.util.removeClass(e, "uk-form-" + (st ? "success" : "danger")),
        UIkit.util.addClass(e, "uk-form-" + (st ? "danger" : "success"));

      if (
        e.getAttribute("type") != "checkbox" &&
        e.getAttribute("type") != "radio"
      ) {
        e.parentNode.append(icon);
      }

      if (
        e.getAttribute("type") == "checkbox" ||
        e.getAttribute("type") == "radio"
      ) {
        if (st) {
          UIkit.util.addClass(e.parentNode, "uk-text-danger");
        } else {
          UIkit.util.removeClass(e.parentNode, "uk-text-danger");
        }
      }

      if (st && m !== "") {
        UIkit.notification({
          message: m,
          timeout: 2000,
          status: "danger",
          pos: "top-left",
        });
      }
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
