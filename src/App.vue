<template>
  <div class="uk-container">
    <form class="uk-form-stacked uk-margin-large">
      <LocationsSelect v-model:location="location" v-model:loading="loading" />
      <NewCustomer v-model:customer="customer" v-if="location != 0" />
      <InterestsSelect
        :location="location"
        v-model:group="group"
        v-model:interest="interest"
        v-model:loading="loading"
        v-show="customer !== '' && location != 0"
      />
      <AppointmentsSelect
        :location="location"
        :interest="interest"
        v-model:appointment="appointment"
        v-model:showContactForm="showContactForm"
        v-model:loading="loading"
        v-if="interest !== '' && interest != 0"
      />
      <ContactForm
        :location="location"
        :interest="interest"
        :customer="customer"
        v-model:customerData="customerData"
        v-model:loading="loading"
        v-if="showContactForm !== '' && showContactForm"
      />
      <ResourcesSelect
        :location="location"
        :interest="interest"
        :appointment="appointment"
        v-model:resource="resource"
        v-model:showCalendar="showCalendar"
        v-model:loading="loading"
        v-if="appointment !== '' && appointment != 0"
      />
      <CalendarPicker
        :location="location"
        :interest="interest"
        :appointment="appointment"
        :resource="resource"
        v-model:loading="loading"
        v-model:from="from"
        v-model:until="until"
        v-model:resourceId="resourceId"
        v-model:showCustomer="showCustomer"
        v-if="showCalendar"
      />
      <CustomerForm
        :location="location"
        :interest="interest"
        :appointment_type_id="appointment"
        :resource="resourceId"
        :from="from"
        :until="until"
        :customer="customer"
        v-model:customerData="customerData"
        v-if="customer !== '' && showCustomer"
      />
    </form>
    <table
      v-if="showTable"
      class="uk-table uk-table-divider uk-table-small uk-table-justify"
    >
      <thead>
        <tr>
          <th>Wert</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Location</td>
          <td>{{ location }}</td>
        </tr>
        <tr>
          <td>Customer</td>
          <td>{{ customer }}</td>
        </tr>
        <tr>
          <td>Interest</td>
          <td>{{ interest }}</td>
        </tr>
        <tr>
          <td>Appointment</td>
          <td>{{ appointment }}</td>
        </tr>
        <tr>
          <td>Resource</td>
          <td>{{ resource }}</td>
        </tr>
        <tr>
          <td>CustomerData</td>
          <td>{{ customerData }}</td>
        </tr>
        <tr>
          <td>showCustomer</td>
          <td>{{ showCustomer }}</td>
        </tr>
        <tr>
          <td>From</td>
          <td>{{ from }}</td>
        </tr>
        <tr>
          <td>Until</td>
          <td>{{ until }}</td>
        </tr>
        <tr>
          <td>Resource ID</td>
          <td>{{ resourceId }}</td>
        </tr>
        <tr>
          <td>Loading</td>
          <td>{{ loading }}</td>
        </tr>
      </tbody>
    </table>
    <div
      class="uk-overlay-primary uk-position-cover uk-position-fixed"
      v-if="loading"
    >
      <div class="uk-position-center">
        <span uk-spinner="ratio: 2"></span>
      </div>
    </div>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import LocationsSelect from "./components/LocationsSelect";
import NewCustomer from "./components/NewCustomer";
import InterestsSelect from "./components/InterestsSelect";
import AppointmentsSelect from "./components/AppointmentsSelect";
import ResourcesSelect from "./components/ResourcesSelect";
import CustomerForm from "./components/CustomerForm";
import ContactForm from "./components/ContactForm";
import CalendarPicker from "./components/CalendarPicker";

UIkit.use(Icons);

export default {
  name: "App",

  components: {
    LocationsSelect,
    NewCustomer,
    InterestsSelect,
    AppointmentsSelect,
    ResourcesSelect,
    CustomerForm,
    ContactForm,
    CalendarPicker,
  },

  data: () => {
    return {
      showCalendar: false,
      showCustomer: false,
      showContactForm: false,
      showTable: true,
      customer: "",
      group: 0,
      location: 0,
      interest: 0,
      /*customer: "new",
      location: 3,
      group: 402,
      interest: 1381,*/
      appointment: 0,
      resource: 0,
      from: "",
      until: "",
      resourceId: 0,
      customerData: {
        firstname: "",
        lastname: "",
        email: "",
        privacy: false,
        gender: 0,
        birthday: "",
        street: "",
        no: "",
        zip: "",
        city: "",
        phone: "",
        mobile: "",
      },
      loading: false,
    };
  },

  watch: {
    location(newLocation, oldLocation) {
      if (newLocation != oldLocation) {
        this.customer = "";
        this.showContactForm = false;
      }
    },
    customer(newCustomer, oldCustomer) {
      if (newCustomer != oldCustomer) {
        this.group = 0;
        this.interest = 0;
        this.showCustomer = false;
      }
    },
    interest(newInterest, oldInterest) {
      if (newInterest != oldInterest) {
        this.appointment = 0;
        this.resource = 0;
        this.showCalendar = false;
        this.showContactForm = false;
        this.showCustomer = false;
      }
    },
    resource(newInterest, oldInterest) {
      if (newInterest != oldInterest) {
        this.showCustomer = false;
        this.from = "";
        this.until = "";
        this.resourceId = 0;
      }
    },
    appointment(newAppointment, oldAppointment) {
      if (newAppointment != oldAppointment) {
        this.showCalendar = false;
      }
    },
  },

  methods: {
    onSubmit(e) {
      var a = e.target,
        self = this,
        v = true;

      UIkit.util.$$("[required]", a).forEach(function (el) {
        if (el.getAttribute("type") == "checkbox") {
          if (!el.checked) {
            self.addMessage(el, true);
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }

        if (el.getAttribute("type") == "radio") {
          var checked = false;
          UIkit.util
            .$$("input[name=" + el.getAttribute("name") + "]", a)
            .forEach(function (radio) {
              if (radio.checked) {
                checked = true;
              }
            });
          if (!checked) {
            self.addMessage(el, true);
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }

        // Inputs or Textarea
        if (
          (el.tagName == "INPUT" || el.tagName == "TEXTAREA") &&
          el.getAttribute("type") != "checkbox"
        ) {
          if (el.value.length < 1) {
            self.addMessage(el, true);
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }

        // Select
        if (el.tagName == "SELECT") {
          if (!el.value) {
            self.addMessage(el, true);
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }
      });

      UIkit.util.$$("input[type=email]", a).forEach(function (el) {
        var regex =
          // eslint-disable-next-line no-control-regex
          /^((([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        if (el.value.length > 0) {
          if (!regex.test(el.value)) {
            self.addMessage(el, true, el.getAttribute("data-emailmessage"));
            v = false;
          } else {
            self.addMessage(el, false);
          }
        }
      });

      if (!v) {
        return false;
      }

      return true;
    },

    addMessage(e, st, message) {
      var icon = document.createElement("span"),
        spans = e.parentNode.querySelectorAll("span.kickicon"),
        icons = e.parentNode.querySelectorAll(
          "span.uk-form-icon-flip:not(.kickicon)"
        ),
        m =
          typeof message !== "undefined"
            ? message
            : e.getAttribute("data-message");

      icon.setAttribute(
        "class",
        "uk-form-icon uk-text-" +
          (st ? "danger" : "success") +
          " uk-form-icon-flip kickicon"
      );
      icon.setAttribute("uk-icon", "icon: " + (st ? "close" : "check"));

      if (
        icons.length ||
        e.getAttribute("type") == "date" ||
        e.tagName == "SELECT"
      ) {
        icon.setAttribute("style", "right: 30px");
      }

      if (spans.length) {
        e.parentNode.removeChild(spans[0]);
      }

      UIkit.util.removeClass(e, "uk-form-" + (st ? "success" : "danger")),
        UIkit.util.addClass(e, "uk-form-" + (st ? "danger" : "success"));

      if (
        e.getAttribute("type") != "checkbox" &&
        e.getAttribute("type") != "radio"
      ) {
        e.parentNode.append(icon);
      }

      if (
        e.getAttribute("type") == "checkbox" ||
        e.getAttribute("type") == "radio"
      ) {
        if (st) {
          UIkit.util.addClass(e.parentNode, "uk-text-danger");
        } else {
          UIkit.util.removeClass(e.parentNode, "uk-text-danger");
        }
      }

      if (st && m !== "") {
        UIkit.notification({
          message: m,
          timeout: 2000,
          status: "danger",
          pos: "top-left",
        });
      }
    },
  },
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
