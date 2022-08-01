<script>
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
};
</script>

<template>
  <div class="uk-margin">
    <label class="uk-form-label" for="firstname">Vorname</label>
    <div class="uk-form-controls">
      <input
        class="el-input uk-input"
        id="firstname"
        name="firstname"
        placeholder="Bitte geben Sie Ihren Vornamen ein. *"
        @input="$emit('update:customer', $event.target.value)"
      />
    </div>
  </div>
  <div class="uk-margin">
    <label class="uk-form-label" for="lastname">Nachname</label>
    <div class="uk-form-controls">
      <input
        class="el-input uk-input"
        id="lastname"
        name="lastname"
        placeholder="Bitte geben Sie Ihren Nachname ein. *"
      />
    </div>
  </div>
  <div class="uk-margin" v-if="customer == 'new'">
    <label class="uk-form-label" for="birthday">birthday</label>
    <div class="uk-form-controls">
      <input
        class="el-input uk-input"
        id="birthday"
        name="birthday"
        placeholder="Bitte geben Sie Ihren birthday ein. *"
      />
    </div>
  </div>
</template>
