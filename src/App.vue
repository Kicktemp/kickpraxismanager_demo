<template>
  <div class="uk-container">
    <form class="uk-form-stacked uk-margin-large">
      <div class="uk-margin" :class="{'uk-background-primary': location != ''}">
        <label class="uk-form-label" for="form-horizontal-select">Standort wählen</label>
        <div class="uk-form-controls">
          <div class="uk-flex-middle" uk-grid>
            <div class="uk-width-5-6">
              <select class="uk-select" id="form-horizontal-select" v-model="location">
                <option value="">Standort wählen</option>
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
              <span v-if="location != ''" uk-icon="icon: check; ratio: 2"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-margin" v-if="location != ''">
        <label class="uk-form-label" for="interest_in">Select</label>
        <div class="uk-form-controls">
          <select class="uk-select" id="interest_in">
            <option>Behandlung wählen</option>
            <option
                v-for="interest in interests"
                :key="interest.attributes.interestid"
                :value="interest.attributes.interestid"
            >
              {{ interest.attributes.title }} ({{ interest.attributes.category_title }})
            </option>
          </select>
        </div>
      </div>
    </form>
    <div class="uk-overlay-primary uk-position-cover" v-if="loading">
      <div class="uk-position-center">
        <span uk-spinner="ratio: 2"></span>
      </div>
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

export default {
  name: "App",
  data: () => {
    return {
      location: "",
      interest: "",
      loading: false,
      locations: null,
      interests: null,
    };
  },

  created() {
    this.init();
    this.fetchLocations();
  },

  watch: {
    location(newLocation, oldLocation) {
        this.fetchInterests();
    }
  },

  methods: {
    init() {
      if (window.kick_location !== undefined) {
        this.location = window.kick_location;
      }
    },
    async fetchLocations() {
      this.loading = true;
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/locations`;

      fetch(url, {headers: {"X-Joomla-Token": `${process.env.VUE_APP_JOOMLA_TOKEN}`}})
          .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response statusText
              const error = (data && data.message) || response.statusText;
              return Promise.reject(error);
            }

            this.locations = data.data;
            this.loading = false;
          })
          .catch(error => {
            this.errorMessage = error;
            console.error("There was an error!", error);
          });
    },
    async fetchInterests() {
      this.loading = true;
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/interests?location_id=${this.location}`;

      fetch(url, {headers: {"X-Joomla-Token": `${process.env.VUE_APP_JOOMLA_TOKEN}`}})
          .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
              // get error message from body or default to response statusText
              const error = (data && data.message) || response.statusText;
              return Promise.reject(error);
            }

            this.interests = data.data;
            this.loading = false;
          })
          .catch(error => {
            this.errorMessage = error;
            console.error("There was an error!", error);
          });
    },
  },
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
