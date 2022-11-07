<script>
export default {
  name: "AppointmentsSelect",
  props: {
    showContactForm: {
      type: Boolean,
      default: false,
    },
    location: {
      type: [Number, String],
      default: 0,
    },
    interest: {
      type: [Number, String],
      default: 0,
    },
    appointment: {
      type: [Number, Object],
      default: 0,
    },
    loading: Boolean,
  },
  emits: ["update:appointment", "update:loading"],
  data: () => {
    return {
      appointments: [],
    };
  },
  created() {
    this.fetchAppointments();
  },
  watch: {
    interest(newInterest, oldInterest) {
      if (newInterest != oldInterest && newInterest != 0) {
        this.appointments = [];
        this.fetchAppointments();
      }
    },
    appointment(newAppointment, oldAppointment) {
      if (newAppointment != oldAppointment && newAppointment != 0) {
        this.$emit("update:appointment", this.appointment);
      }
    },
  },
  methods: {
    async fetchAppointments() {
      this.$emit("update:loading", true);
      this.$emit("update:showContactForm", false);
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/available-resources/0/0/${this.location}/${this.interest}/0`;
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

          this.appointments = data.data;

          if (this.appointments.length == 1) {
            this.$emit("update:appointment", this.appointments[0].attributes);
          }

          if (this.appointments.length == 0) {
            this.$emit("update:showContactForm", true);
          }

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
  <div>
    <hr class="uk-animation-slide-bottom-small" />
    <div
      v-if="appointments.length > 0"
      class="uk-margin uk-animation-slide-bottom-small"
    >
      <label class="uk-form-label" for="terminart"
        >Welche Terminart möchten Sie gerne in Anspruch nehmen?</label
      >
      <div class="uk-form-controls">
        <div class="uk-flex-middle" uk-grid>
          <div class="uk-width-5-6">
            <select
              v-if="appointments.length > 1"
              class="uk-select"
              id="terminart"
              :value="appointment"
              @input="$emit('update:appointment', $event.target.value)"
            >
              <option value="0">Bitte wählen</option>
              <option
                v-for="appointattr in appointments"
                :key="appointattr.attributes.id"
                :value="appointattr.attributes"
              >
                {{ appointattr.attributes.name }}
              </option>
            </select>
            <button
              v-if="appointments.length == 1"
              class="uk-button uk-button-primary"
              type="button"
            >
              {{ appointments[0].attributes.name }}
            </button>
          </div>
          <div class="uk-width-1-6 uk-text-right">
            <span
              v-if="appointment != 0"
              uk-icon="icon: check; ratio: 2"
              class="uk-text-success"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
