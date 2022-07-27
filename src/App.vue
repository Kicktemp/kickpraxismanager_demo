<template>
  <div class="uk-container">
    <form class="uk-form-stacked uk-margin-large">
      <div
        class="uk-margin"
        :class="{ 'uk-background-primary': location != '' }"
      >
        <label class="uk-form-label" for="form-horizontal-select"
          >Standort wählen</label
        >
        <div class="uk-form-controls">
          <div class="uk-flex-middle" uk-grid>
            <div class="uk-width-5-6">
              <select
                class="uk-select"
                id="form-horizontal-select"
                v-model="location"
              >
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
              <span
                v-if="location != ''"
                uk-icon="icon: check; ratio: 2"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-margin" v-if="location != ''">
        <label class="uk-form-label">Select</label>
        <div class="uk-form-controls">
          <select class="uk-select" v-model="group">
            <option value="">Bitte wählen</option>
            <option
              v-for="group in groups"
              :key="group.attributes.id"
              :value="group.attributes.id"
            >
              {{ group.attributes.title }}
            </option>
          </select>
          <select class="uk-select" v-model="interest" v-if="group != ''">
            <option value="">Bitte wählen</option>
            <option
              v-for="interest in interests"
              :key="interest.attributes.interestid"
              :value="interest.attributes.interestid"
            >
              {{ interest.attributes.title }}
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
      group: "",
      loading: false,
      locations: null,
      interests: null,
      groups: null,
    };
  },

  created() {
    this.init();
    this.fetchLocations();
  },

  watch: {
    location(newLocation) {
      if (newLocation !== "") this.fetchGroups();
    },
    group(newGroup) {
      if (newGroup !== "") this.fetchInterests();
    },
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

          this.locations = data.data;
          this.loading = false;
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    async fetchGroups() {
      this.loading = true;
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/groups/${this.location}`;

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

          this.groups = data.data;
          this.loading = false;
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    async fetchInterests() {
      this.loading = true;
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/interests/${this.location}/${this.group}`;

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

          this.interests = data.data;
          this.loading = false;
        })
        .catch((error) => {
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
