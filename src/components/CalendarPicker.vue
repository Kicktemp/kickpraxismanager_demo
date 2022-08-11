<template>
  <div>
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
      json: {
        "min-page": {
          month: 8,
          year: 2022,
        },
        "max-page": {
          month: 11,
          year: 2022,
        },
        available: [
          {
            start: "2022-08-09",
            end: "2022-08-09",
          },
          {
            start: "2022-08-18",
            end: "2022-08-18",
          },
          {
            start: "2022-08-08",
            end: "2022-08-08",
          },
        ],
        slots: {
          "2022-08-08": [
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T12:00:00Z",
              fromText: "12:00",
              until: "2010-04-21T13:00:00Z",
              untilText: "13:00",
              duration: 60,
              "resource-id": 23,
            },
          ],
          "2022-08-09": [
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              fromText: "09:00",
              until: "2010-04-21T10:00:00Z",
              untilText: "10:00",
              duration: 60,
              "resource-id": 23,
            },
          ],
        },
      },
    };
  },
  filters: {
    formatDate(value) {
      console.log(value);
      return new Date(value);
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
