<template>
  <div id="kickcalendar">
    <hr class="uk-animation-slide-bottom-small" />
    <div class="uk-margin uk-animation-slide-bottom-small">
      <label class="uk-form-label" for="terminart"
        >Die nachfolgenden Termine können wir Ihnen basierend auf Ihren Wünschen
        anbieten. Bitte wählen Sie Ihren Wunschtermin aus.</label
      >
      <div class="uk-grid-divider uk-grid-small" uk-grid>
        <div class="uk-width-expand@m">
          <DatePicker
            @dayclick="onDayClick"
            is-expanded
            :max-page="json['max-page']"
            :min-page="json['min-page']"
            :available-dates="json.available"
            :from-page="json['min-page']"
          />
        </div>
        <div class="uk-width-1-2">
          <div
            class="uk-flex-middle uk-grid-small uk-child-width-auto uk-grid"
            uk-grid
          >
            <div v-for="time in times" :key="time">
              <button
                type="button"
                @click="onTimeClick(time)"
                class="uk-button uk-button-default"
                :class="{ 'uk-button-primary': selectedTime == time }"
              >
                {{ time.fromText }} - {{ time.untilText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";

export default {
  props: {
    showCustomer: {
      type: Boolean,
      default: false,
    },
    from: {
      type: String,
      default: "",
    },
    until: {
      type: String,
      default: "",
    },
    resource: {
      type: [Number, Object],
      default: 0,
    },
    appointment: {
      type: [Number, Object],
      default: 0,
    },
    interest: {
      type: Number,
      default: 0,
    },
    location: {
      type: Number,
      default: 0,
    },
    resourceId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      date: new Date(),
      day: "",
      selectedTime: {},
      times: [],
      json: {},
    };
  },
  filters: {
    formatDate(value) {
      console.log(value);
      return new Date(value);
    },
  },
  created() {
    this.fetchSlots();
  },
  watch: {
    resource(newResource, oldResource) {
      if (newResource != oldResource && newResource !== "") {
        this.fetchSlots();
      }
    },
  },
  methods: {
    onDayClick(day) {
      if (this.day == day.id) {
        this.day = null;
        this.times = [];
      } else {
        this.day = day.id;
        this.times = this.json.slots[day.id];
      }
      this.$emit("update:from", "");
      this.$emit("update:until", "");
      this.$emit("update:resourceId", 0);
      this.$emit("update:showCustomer", false);
    },
    onTimeClick(time) {
      this.$emit("update:showCustomer", true);
      this.selectedTime = time;
      this.$emit("update:from", time.from);
      this.$emit("update:until", time.until);
      this.$emit("update:resourceId", time["resource-id"]);
    },
    async fetchSlots() {
      this.$emit("update:loading", true);
      const url = `${process.env.VUE_APP_API_URL}/${process.env.VUE_APP_BASE_PATH}/kickpraxismanager/slots/${this.resource.from}/${this.resource.until}/${this.resource.appointment}/${this.resource.location}/${this.resource.interest}/${this.resource.id}`;
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
          this.json = data.data[0].attributes;
          this.$emit("update:loading", false);
          UIkit.scroll("", { offset: 90 }).scrollTo(
            UIkit.util.$("div#kickcalendar")
          );
        })
        .catch((error) => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<style>
.vc-day-content.is-disabled[role="button"] {
  cursor: not-allowed;
  text-decoration-line: line-through;
}

.vc-day-content.is-disabled:hover {
  background-color: transparent;
}
</style>
