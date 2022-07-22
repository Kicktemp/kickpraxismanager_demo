<template>
  <div class="uk-container">
    <form class="uk-form-horizontal uk-margin-large">
      <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal-select">Select</label>
        <div class="uk-form-controls">
          <select class="uk-select" id="form-horizontal-select">
            <option>Standort wählen</option>
            <option
              v-for="location in locations"
              :key="location.id"
              :value="location.id"
            >
              {{ location.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="interest_in">Select</label>
        <div class="uk-form-controls">
          <select class="uk-select" id="interest_in">
            <option>Behandlung wählen</option>
            <option
              v-for="interest in interests"
              :key="interest.id"
              :value="interest.id"
            >
              {{ interest.name }}
            </option>
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);

export default {
  name: "App",
  data: () => {
    return {
      locations: [
        {
          id: 1,
          name: "Leipzig",
          weight: false,
        },
        {
          id: 2,
          name: "München",
          weight: true,
        },
      ],
      interests: [
        {
          id: 1025,
          name: "Fettabsagung",
          weight: true,
        },
        {
          id: 1055,
          name: "Brustvergrößerung",
          weight: true,
        },
      ],
    };
  },
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
