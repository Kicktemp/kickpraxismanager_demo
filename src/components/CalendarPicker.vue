<template>
  <DatePicker
    @dayclick="onDayClick"
    is-expanded
    :max-page="json['max-page']"
    :min-page="json['min-page']"
    :available-dates="json.available"
  />
  <div v-for="time in times" :key="time">{{ time.start }} - {{ time.end }}</div>
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
              start: 5,
              end: 5,
            },
            {
              start: 15,
              end: 15,
            },
          ],
          "2022-08-09": [
            {
              start: 15,
              end: 16,
            },
            {
              start: 15,
              end: 15,
            },
          ],
        },
      },
    };
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
  cursor: default;
  text-decoration-line: line-through;
}

.vc-day-content.is-disabled:hover {
  background-color: transparent;
}
</style>
