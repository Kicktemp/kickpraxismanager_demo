<script>
export default {
  name: "AppointmentsSelect",
  props: {
    location: {
      type: Number,
      default: 0,
    },
    interest: {
      type: Number,
      default: 0,
    },
    appointment: {
      type: Number,
      default: 0,
    },
    loading: Boolean,
  },
  emits: ["update:appointment", "update:loading"],
  data: () => {
    return {
      appointments: null,
    };
  },
  created() {
    this.fetchAppointments();
  },
  watch: {
    interest(newInterest, oldInterest) {
      if (newInterest != oldInterest && newInterest != 0) {
        this.fetchAppointments();
      }
    },
  },
  computed: {
    appointmentSelected() {
      return this.appointment;
    },
  },
  methods: {
    async fetchAppointments() {
      this.$emit("update:loading", true);
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/appointments/${this.location}/${this.interest}`;
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
    <div class="uk-margin uk-animation-slide-bottom-small">
      <label class="uk-form-label" for="terminart"
        >Welche Terminart möchten Sie gerne in Anspruch nehmen?</label
      >
      <div class="uk-form-controls">
        <div class="uk-flex-middle" uk-grid>
          <div class="uk-width-5-6">
            <select
              class="uk-select"
              id="terminart"
              v-model="appointmentSelected"
              @input="$emit('update:appointment', $event.target.value)"
            >
              <option value="0">Bitte wählen</option>
              <option
                v-for="appointment in appointments"
                :key="appointment.attributes.id"
                :value="appointment.attributes.id"
              >
                {{ appointment.attributes.name }}
              </option>
            </select>
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
