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
        v-model:loading="loading"
        v-if="interest !== '' && interest != 0"
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
        v-model:customerData="customerData"
        :customer="customer"
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
          <td>Group</td>
          <td>{{ group }}</td>
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
    <div class="uk-overlay-primary uk-position-cover uk-position-fixed" v-if="loading">
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
    CalendarPicker,
  },

  data: () => {
    return {
      showCalendar: false,
      showCustomer: true,
      showTable: true,
      /*customer: "",
      group: 0,
      location: 0,
      interest: 0,*/
      customer: "new",
      location: 9,
      group: 402,
      interest: 1854,
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
      }
    },
    appointment(newAppointment, oldAppointment) {
      if (newAppointment != oldAppointment) {
        this.showCalendar = false;
      }
    },
  },
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
