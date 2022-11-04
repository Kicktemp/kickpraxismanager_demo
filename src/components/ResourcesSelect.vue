<script>
export default {
  name: "ResourcesSelect",
  props: {
    location: {
      type: [Number, String],
      default: 0,
    },
    appointment: {
      type: [Number, Object],
    },
    interest: {
      type: [Number, String],
      default: 0,
    },
    resource: {
      type: [Number, Object],
      default: 0,
    },
    showCalendar: {
      type: Boolean,
      default: false,
    },
    loading: Boolean,
  },
  emits: ["update:resource", "update:loading", "update:showCalendar"],
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
        this.fetchResources();
      }
    },
    resourceType(newResource) {
      if (newResource == "early") {
        this.$emit("update:showCalendar", true);
        this.$emit("update:resource", {
          id: 0,
          location: this.appointment.resources[0].location,
          interest: this.appointment.resources[0].interest,
          appointment: this.appointment.resources[0].appointment,
          from: this.appointment.resources[0].from,
          until: this.appointment.resources[0].until,
        });
        this.showDoctors = false;
      } else if (newResource == "doctors") {
        this.$emit("update:showCalendar", false);
        this.$emit("update:resource", "");
        this.showDoctors = true;
      }
    },
  },
  methods: {
    async fetchResources() {
      this.$emit("update:loading", true);
      if (typeof this.appointment.resources[0].skip !== "undefined") {
        this.$emit("update:resource", this.appointment.resources[0]);
        this.$emit("update:showCalendar", true);
        this.showDoctors = false;
        this.showNext = false;
      } else {
        this.showNext = true;
      }

      this.$emit("update:loading", false);

      /*
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
            UIkit.notification({
              message: "Zum Kontaktformular, weil keine Resource da sind.",
              status: "primary",
              pos: "top-right",
              timeout: 5000,
            });
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

       */
    },
  },
};
</script>

<template>
  <div>
    <hr class="uk-animation-slide-bottom-small" v-if="showNext" />
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
                  :class="{
                    'uk-button-primary': this.resourceType == 'doctors',
                  }"
                  type="button"
                >
                  Behandler auswählen
                </button>
              </div>
            </div>
          </div>
          <div class="uk-width-1-6 uk-text-right">
            <span
              v-if="resourceType != ''"
              uk-icon="icon: check; ratio: 2"
              class="uk-text-success"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <hr class="uk-animation-slide-bottom-small" v-if="showDoctors" />
    <div class="uk-margin uk-animation-slide-bottom-small" v-if="showDoctors">
      <label class="uk-form-label"
        >Bitte wählen Sie Ihren gewünschten Behandler aus</label
      >
      <div class="uk-flex-middle" uk-grid>
        <div class="uk-width-5-6">
          <div class="uk-child-width-1-4@m" uk-grid>
            <div
              v-for="resource in appointment.resources"
              :key="resource.id"
              :value="resource"
            >
              <div
                class="uk-card uk-card-small uk-card-default uk-card-hover"
                @mousedown="
                  $emit('update:showCalendar', true);
                  $emit('update:resource', resource);
                "
              >
                <div class="uk-card-media-top">
                  <img
                    :src="resource.data.image"
                    :alt="resource.data.image_alt"
                  />
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title uk-text-center">
                    {{ resource.data.title }}
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
  </div>
</template>
