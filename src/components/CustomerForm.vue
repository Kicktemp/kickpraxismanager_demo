<script>
import UIkit from "uikit";
export default {
  name: "CustomerForm",
  props: {
    customer: {
      type: String,
      default: "",
    },
    customerData: {
      type: Object,
    },
  },
  emits: ["update:customerData"],
  data: () => {
    return {
      locations: null,
      customerErrors: {
        firstname: "",
        lastname: "",
        email: "",
        privacy: "",
      },
      customerValues: {
        firstname: "",
        lastname: "",
        email: "",
        privacy: false,
        gender: 0,
        birthday: "",
        street: "",
        no: "",
        zip: "",
        city: "",
        phone: "",
        mobile: "",
        attention: 1,
        newsletter: 0,
      },
    };
  },
  created() {
    UIkit.scroll("", { offset: 90 }).scrollTo(UIkit.util.$("div#customerForm"));
  },
  watch: {
    "customerValues.firstname"() {
      this.$emit("update:customerData", this.customerValues);
    },
  },
  methods: {
    showNotification(message) {
      UIkit.notification({
        message: message,
        timeout: 3000,
        status: "danger",
        pos: "top-left",
      });
    },
    saveAppointment() {
      if (
        !this.customerValues.firstname.length &&
        this.customerValues.firstname.length < 2
      ) {
        this.showNotification("Vorname fehlt");
        this.customerErrors.firstname = false;
      } else {
        this.customerErrors.firstname = true;
      }
    },
  },
};
</script>

<template>
  <div class="uk-animation-slide-bottom-small" id="customerForm">
    <hr class="uk-animation-slide-bottom-small" />
    <p>Ihre persönlichen Daten</p>
    {{ customerValues }}
    {{ customerErrors }}
    <div class="uk-margin">
      <div uk-grid>
        <div class="uk-width-1-5@m">
          <div class="uk-form-controls">
            <select
              class="uk-select"
              id="gender"
              v-model="customerValues.gender"
            >
              <option value="0">Anrede auswählen</option>
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
              :class="{
                'uk-form-danger': customerErrors.firstname === false,
                'uk-form-success': customerErrors.firstname === true,
              }"
              id="firstname"
              name="firstname"
              placeholder="Vorname *"
              v-model="customerValues.firstname"
            />
            <span
              v-if="customerErrors.firstname == false"
              class="uk-form-icon uk-form-icon-flip uk-icon uk-text-danger"
              uk-icon="icon: close"
            ></span>
            <span
              v-if="customerErrors.firstname == true"
              class="uk-form-icon uk-form-icon-flip uk-icon uk-text-success"
              uk-icon="icon: check"
            ></span>
          </div>
        </div>
        <div
          :class="{
            'uk-width-1-2@m': customer == 'old',
            'uk-width-1-3@m': customer == 'new',
          }"
        >
          <div class="uk-form-controls">
            <input
              class="el-input uk-input"
              id="lastname"
              name="lastname"
              placeholder="Nachname*"
              v-model="customerValues.lastname"
            />
          </div>
        </div>
        <div class="uk-width-1-3@m" v-if="customer == 'new'">
          <div class="uk-form-controls">
            <DatePicker v-model="customerValues.birthday">
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
                    placeholder="Geburtsdatum"
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
        <div class="uk-form-controls">
          <input
            class="el-input uk-input"
            id="email"
            name="email"
            placeholder="E-Mail *"
            v-model="customerValues.email"
          />
        </div>
      </div>
      <div class="uk-width-1-2@m">
        <div class="uk-form-controls">
          <input
            class="el-input uk-input"
            id="mobile"
            name="mobile"
            placeholder="Handynummer *"
            v-model="customerValues.mobile"
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
            v-model="customerValues.street"
          />
        </div>
      </div>
      <div class="uk-width-1-3@m">
        <div class="uk-form-controls">
          <input
            class="el-input uk-input"
            id="no"
            name="no"
            placeholder="Hausnummer"
            v-model="customerValues.no"
          />
        </div>
      </div>
    </div>
    <div class="uk-margin" uk-grid v-if="customer == 'new'">
      <div class="uk-width-1-3@m">
        <div class="uk-form-controls">
          <input
            class="el-input uk-input"
            id="zip"
            name="zip"
            placeholder="PLZ *"
            v-model="customerValues.zip"
          />
        </div>
      </div>
      <div class="uk-width-2-3@m">
        <div class="uk-form-controls">
          <input
            class="el-input uk-input"
            id="city"
            name="city"
            placeholder="Ort"
            v-model="customerValues.city"
          />
        </div>
      </div>
    </div>
    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
      <label>
        <input
            class="uk-checkbox"
            type="checkbox"
            v-model="customerValues.newsletter"
        />
        Ich willige ein, dass ich regelmäßig einen Newsletter von S-thetic erhalte.
      </label>
    </div>
    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
      <label>
        <input
          class="uk-checkbox"
          type="checkbox"
          v-model="customerValues.privacy"
        />
        Ich willige ein, dass meine Angaben zur Kontaktaufnahme und Zuordnung
        für eventuelle Rückfragen dauerhaft gespeichert werden. Die
        Datenschutzbestimmungen habe ich zur Kenntnis genommen.
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
        class="uk-button uk-button-primary"
        type="button"
        @mousedown="saveAppointment"
      >
        Absenden
      </button>
    </div>
  </div>
</template>
