<template>
  <div class="uk-animation-slide-bottom-small">
    <DatePicker
      @dayclick="onDayClick"
      is-expanded
      :max-page="json['max-page']"
      :min-page="json['min-page']"
      :available-dates="json.available"
    />
    <div v-for="time in times" :key="time">
      {{ time.start }} - {{ time.end }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      day: "",
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
              until: "2010-04-21T10:00:00Z",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              until: "2010-04-21T10:00:00Z",
              duration: 60,
              "resource-id": 23,
            },
          ],
          "2022-08-09": [
            {
              from: "2010-04-21T09:00:00Z",
              until: "2010-04-21T10:00:00Z",
              duration: 60,
              "resource-id": 23,
            },
            {
              from: "2010-04-21T09:00:00Z",
              until: "2010-04-21T10:00:00Z",
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
