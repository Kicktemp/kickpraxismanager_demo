<script>
export default {
  name: "InterestsSelect",
  props: {
    location: {
      type: [Number, String],
      default: 0,
    },
    group: {
      type: [Number, String],
      default: 0,
    },
    interest: {
      type: [Number, String],
      default: 0,
    },
    loading: Boolean,
  },
  emits: ["update:group", "update:interest", "update:loading"],
  data: () => {
    return {
      groups: null,
      interests: null,
    };
  },
  created() {
    this.fetchGroups();
    if (this.group != 0) {
      this.fetchInterests();
    }
  },
  watch: {
    location(newLocation, oldLocation) {
      if (newLocation != oldLocation && newLocation != 0) {
        this.fetchGroups();
      }
    },
    group(newGroup, oldGroup) {
      if (newGroup != oldGroup && newGroup != 0) {
        this.fetchInterests(true);
      }
    },
  },
  methods: {
    async fetchGroups() {
      this.$emit("update:loading", true);
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
          this.$emit("update:loading", false);
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    async fetchInterests(reset) {
      this.$emit("update:loading", true);
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
          if (reset) {
            this.$emit("update:interest", 0);
          }
          this.interests = data.data;
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
  <div>
    <hr class="uk-animation-slide-bottom-small" />
    <div class="uk-margin uk-animation-slide-bottom-small">
      <label class="uk-form-label" for="interesse-select"
        >Zu welcher Körperregion möchten Sie beraten werden und was ist Ihr
        Behandlungswunsch?</label
      >
      <div class="uk-form-controls">
        <div class="uk-flex-middle" uk-grid>
          <div class="uk-width-5-6">
            <div class="uk-flex-middle" uk-grid>
              <div class="uk-width-1-2">
                <select
                  class="uk-select"
                  id="interesse-select"
                  :value="group"
                  @input="$emit('update:group', $event.target.value)"
                >
                  <option value="0">Bitte auswählen</option>
                  <option
                    v-for="group in groups"
                    :key="group.attributes.id"
                    :value="group.attributes.id"
                  >
                    {{ group.attributes.title }}
                  </option>
                </select>
              </div>
              <div class="uk-width-1-2">
                <select
                  class="uk-select uk-animation-slide-bottom-small"
                  id="interesse-2-select"
                  :value="interest"
                  @input="$emit('update:interest', $event.target.value)"
                  v-show="group != 0"
                >
                  <option value="0">Bitte auswählen</option>
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
          </div>
          <div class="uk-width-1-6 uk-text-right">
            <span
              v-if="group != 0 && interest != 0"
              uk-icon="icon: check; ratio: 2"
              class="uk-text-success"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
