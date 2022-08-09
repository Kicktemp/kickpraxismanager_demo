import { createApp } from "vue";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";
import App from "./App.vue";
import "v-calendar/dist/style.css";

const app = createApp(App);
app.use(SetupCalendar, {
  titlePosition: "center",
  transition: "sldie-h",
  locales: {
    de: {
      firstDayOfWeek: 1,
      masks: {
        L: "YYYY-MM-DD",
      },
    },
  },
  masks: {
    title: "MMMM YYYY",
    weekdays: "WW",
    navMonths: "MMM",
    input: ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
    dayPopover: "WWW, MMM D, YYYY",
    data: ["L", "YYYY-MM-DD", "YYYY/MM/DD"],
    iso: "YYYY-MM-DD",
  },
});
app.component("CalendarDate", Calendar);
app.component("DatePicker", DatePicker);
app.mount("#app");
