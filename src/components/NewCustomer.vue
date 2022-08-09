<script>
export default {
  name: "NewCustomer",
  props: {
    customer: {
      type: String,
      default: "",
    },
  },
  emits: ["update:customer"],
  data: () => {
    return {
      locations: null,
    };
  },
  computed: {
    locationSelected() {
      return this.location;
    },
  },
};
</script>

<template>
  <div class="uk-margin">
    <label class="uk-form-label"
      >Planen Sie Ihren ersten Besuch oder sind sie bereits Patient bei
      uns?</label
    >
    <div class="uk-form-controls">
      <div class="uk-flex-middle" uk-grid>
        <div class="uk-width-5-6">
          <div class="uk-grid">
            <div class="uk-width-1-2">
              <button
                @mousedown="$emit('update:customer', 'new')"
                class="uk-button"
                :class="{ 'uk-button-primary': customer == 'new' }"
                type="button"
              >
                Ich plane meinen ersten Termin
              </button>
            </div>
            <div class="uk-width-1-2">
              <button
                @click="$emit('update:customer', 'old')"
                class="uk-button"
                :class="{ 'uk-button-primary': customer == 'old' }"
                type="button"
              >
                Ich möchte einen Folgetermin vereinbaren
              </button>
            </div>
          </div>
        </div>
        <div class="uk-width-1-6 uk-text-right">
          <span
            v-if="customer != ''"
            uk-icon="icon: check; ratio: 2"
            class="uk-text-success"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
