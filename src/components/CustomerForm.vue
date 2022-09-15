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
    };
  },
  created() {
    UIkit.scroll("", { offset: 0 }).scrollTo(UIkit.util.$("div#customerForm"));
  },
};
</script>

<template>
  <div class="uk-animation-slide-bottom-small" id="customerForm">
    <hr class="uk-animation-slide-bottom-small" />
    <p>Ihre persönlichen Daten</p>
    <div class="uk-margin">
      <div uk-grid>
        <div
          :class="{
            'uk-width-1-2@m': customer == 'old',
            'uk-width-1-3@m': customer == 'new',
          }"
        >
          <div class="uk-form-controls">
            <input
              class="el-input uk-input"
              id="firstname"
              name="firstname"
              placeholder="Vorname *"
              @input="$emit('update:customerData', $event.target.value)"
            />
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
              @input="$emit('update:customerData', $event.target.value)"
            />
          </div>
        </div>
        <div class="uk-width-1-3@m" v-if="customer == 'new'">
          <div class="uk-form-controls">
            <DatePicker v-model="date">
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
          />
        </div>
      </div>
    </div>
    <div class="uk-margin" uk-grid v-if="customer == 'new'">
      <div class="uk-width-2-3@m">
        <div class="uk-form-controls">
          <input
            class="el-input uk-input"
            id="street"
            name="street"
            placeholder="Straße *"
            @input="$emit('update:customerData', $event.target.value)"
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
            @input="$emit('update:customerData', $event.target.value)"
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
            @input="$emit('update:customerData', $event.target.value)"
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
            @input="$emit('update:customerData', $event.target.value)"
          />
        </div>
      </div>
    </div>
    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
      <label>
        <input class="uk-checkbox" type="checkbox" /> Ich willige ein, dass
        meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle
        Rückfragen dauerhaft gespeichert werden. Die Datenschutzbestimmungen
        habe ich zur Kenntnis genommen.
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
  </div>
</template>
