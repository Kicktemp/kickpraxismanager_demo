<script>
export default {
  name: "LocationsSelect",
  props: {
    location: {
      type: Number,
      default: 0,
    },
    loading: Boolean,
  },
  emits: ["update:location", "update:loading"],
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
  created() {
    this.init();
    this.fetchLocations();
  },
  methods: {
    init() {
      if (window.kick_location !== undefined) {
        this.$emit("update:location", window.kick_location);
      }
    },
    async fetchLocations() {
      this.$emit("update:loading", true);
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/locations`;
      fetch(url, {
        headers: { "X-Joomla-Token": `${process.env.VUE_APP_JOOMLA_TOKEN}` },
      })
        .then(async (response) => {
          const data = await response.json();

          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }

          if (window.kick_location !== undefined) {
            this.$emit("update:location", window.kick_location);
          }
          this.locations = data.data;
          this.$emit("update:loading", false);
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
  <div class="uk-margin">
    <label class="uk-form-label" for="form-horizontal-select"
      >Standort wählen</label
    >
    <div class="uk-form-controls">
      <div class="uk-flex-middle" uk-grid>
        <div class="uk-width-5-6">
          <select
            class="uk-select"
            id="form-horizontal-select"
            v-model="locationSelected"
            @input="$emit('update:location', $event.target.value)"
          >
            <option value="0">Standort wählen</option>
            <option
              v-for="location in locations"
              :key="location.attributes.locationid"
              :value="location.attributes.locationid"
            >
              {{ location.attributes.title }}
            </option>
          </select>
        </div>
        <div class="uk-width-1-6 uk-text-right">
          <span
            v-if="location != 0"
            uk-icon="icon: check; ratio: 2"
            class="uk-text-success"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
