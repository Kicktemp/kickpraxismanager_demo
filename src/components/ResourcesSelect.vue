<script>
export default {
  name: "ResourcesSelect",
  props: {
    location: {
      type: Number,
      default: 0,
    },
    appointment: {
      type: Number,
      default: 0,
    },
    interest: {
      type: Number,
      default: 0,
    },
    resource: {
      type: Number,
      default: 0,
    },
    showCalendar: {
      type: Boolean,
      default: false,
    },
    weightlocation: {
      type: Number,
      default: 0,
    },
    loading: Boolean,
  },
  emits: ["update:resource", "update:loading", "update:weightlocation"],
  data: () => {
    return {
      resources: null,
      showDoctors: false,
      showNext: false,
      resourceType: "",
    };
  },
  created() {
    this.fetchResources();
  },
  watch: {
    interest(newInterest, oldInterest) {
      if (newInterest != oldInterest && newInterest != 0) {
        this.fetchResources();
        this.$emit("update:showCalendar", false);
        this.showDoctors = false;
        this.resourceType = "";
      }
    },
    appointment(newAppointment, oldAppointment) {
      if (newAppointment != oldAppointment) {
        this.$emit("update:showCalendar", false);
        this.showDoctors = false;
        this.resourceType = "";
      }
    },
    resourceType(newResource) {
      if (newResource == "early") {
        this.$emit("update:showCalendar", true);
        this.$emit("update:resource", 0);
        this.showDoctors = false;
      } else if (newResource == "doctors") {
        this.$emit("update:showCalendar", false);
        this.$emit("update:resource", "");
        this.showDoctors = true;
      }
    },
  },
  computed: {
    resourceSelected() {
      return this.resource;
    },
  },
  methods: {
    async fetchResources() {
      this.$emit("update:loading", true);
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/resources/${this.location}/${this.interest}`;
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

          this.resources = data.data;

          if (this.resources[0] === undefined) {
            this.$emit("update:showCalendar", true);
            this.$emit("update:resource", 0);
          } else {
            if (this.resources[0].attributes.weightresource) {
              this.$emit(
                "update:weightlocation",
                this.resources[0].attributes.weightresource
              );
              this.$emit("update:resource", this.resources[0].attributes.id);
              this.$emit("update:showCalendar", true);
            }

            if (this.resources[0].attributes.doctor_id) {
              this.showNext = true;
            }
          }

          // haben wir keine Behandler oder
          this.$emit("update:loading", false);
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
          this.$emit("update:loading", false);
        });
    },
  },
};
</script>

<template>
  <div class="uk-margin uk-animation-slide-bottom-small" v-if="showNext">
    <label class="uk-form-label" for="behandler-praeferenz"
      >Sollen wir Ihnen einen frühstmöglichen Termin ohne Behandlerpräferenz
      anbieten oder möchten Sie eine Beratung bei einem Behandler Ihrer
      Wahl?</label
    >
    <div class="uk-form-controls">
      <div class="uk-flex-middle" uk-grid>
        <div class="uk-width-5-6">
          <div class="uk-grid">
            <div class="uk-width-1-2">
              <button
                @mousedown="resourceType = 'early'"
                class="uk-button"
                :class="{ 'uk-button-primary': this.resourceType == 'early' }"
                type="button"
              >
                Frühstmöglichen Termin auswählen
              </button>
            </div>
            <div class="uk-width-1-2">
              <button
                @click="resourceType = 'doctors'"
                class="uk-button"
                :class="{ 'uk-button-primary': this.resourceType == 'doctors' }"
                type="button"
              >
                Behandler auswählen
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
  <div class="uk-margin uk-animation-slide-bottom-small" v-if="showDoctors">
    <label class="uk-form-label"
      >Bitte wählen Sie Ihren gewünschten Behandler aus</label
    >
    <div class="uk-flex-middle" uk-grid>
      <div class="uk-width-5-6">
        <div class="uk-child-width-1-4@m" uk-grid>
          <div
            v-for="resource in resources"
            :key="resource.attributes.id"
            :value="resource.attributes.id"
          >
            <div
              class="uk-card uk-card-default uk-card-hover"
              @mousedown="
                $emit('update:showCalendar', true);
                $emit('update:resource', resource.attributes.id);
              "
            >
              <div class="uk-card-media-top">
                <img
                  :src="resource.attributes.data.image"
                  :alt="resource.attributes.data.image_alt"
                />
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">
                  {{ resource.attributes.data.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="uk-width-1-6 uk-text-right">
        <span
          v-if="resource != 0 && resource != ''"
          uk-icon="icon: check; ratio: 2"
          class="uk-text-success"
        ></span>
      </div>
    </div>
  </div>
</template>
