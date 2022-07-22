<template>
  <div class="uk-container">
    <form class="uk-form-horizontal uk-margin-large">
      <div class="uk-margin">
        <label class="uk-form-label" for="form-horizontal-select"
          >Standort</label
        >
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
        <p uk-margin>
          <button class="uk-button uk-button-default">Neuer Kunde</button>
          <button class="uk-button uk-button-default">Bestandskunde</button>
        </p>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="interest_in">Behandlung</label>
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
      <div class="uk-margin">
        <label class="uk-form-label" for="interest_in">Termin-Art</label>
        <div class="uk-form-controls">
          <select class="uk-select" id="interest_in">
            <option>Termin-Art wählen</option>
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
      <h3>Bitte einen Behandler auswählen</h3>
      <div
        class="uk-grid-collapse uk-child-width-1-6@m uk-child-width-1-3@s uk-flex-center uk-text-center"
        uk-grid
      >
        <div class="uk-card-small uk-card-default uk-card-hover">
          <div class="uk-card-media-top">
            <img
              alt="Dr. med. Afschin Fatemi"
              data-src="https://s-thetic.de/images/aerzte_neu/ST22_Dr_Fatemi.jpg"
              data-srcset="https://s-thetic.de/images/aerzte_neu/ST22_Dr_Fatemi.jpg 400w, https://s-thetic.de/images/aerzte_neu/ST22_Dr_Fatemi.jpg 666w, https://s-thetic.de/images/aerzte_neu/ST22_Dr_Fatemi.jpg 667w"
              data-sizes="(min-width: 400px) 400px"
              data-width="400"
              data-height="300"
              uk-img=""
              src="https://s-thetic.de/images/aerzte_neu/ST22_Dr_Fatemi.jpg"
              sizes="(min-width: 400px) 400px"
              srcset="
                https://s-thetic.de/images/aerzte_neu/ST22_Dr_Fatemi.jpg 400w,
                https://s-thetic.de/images/aerzte_neu/ST22_Dr_Fatemi.jpg 666w,
                https://s-thetic.de/images/aerzte_neu/ST22_Dr_Fatemi.jpg 667w
              "
            />
          </div>
          <div class="uk-card-body">
            <h4 class="uk-h5 uk-margin-remove-bottom">
              Dr. med. Afschin Fatemi
            </h4>
          </div>
        </div>
        <div class="uk-card-small uk-card-default uk-card-hover">
          <div class="uk-card-media-top">
            <img
              alt="Raphael Weiland"
              data-src="https://s-thetic.de/images/aerzte_neu/ST22_Weiland.jpg"
              data-srcset="https://s-thetic.de/images/aerzte_neu/ST22_Weiland.jpg 400w, https://s-thetic.de/images/aerzte_neu/ST22_Weiland.jpg 666w, https://s-thetic.de/images/aerzte_neu/ST22_Weiland.jpg 667w"
              data-sizes="(min-width: 400px) 400px"
              data-width="400"
              data-height="300"
              uk-img=""
              src="https://s-thetic.de/images/aerzte_neu/ST22_Weiland.jpg"
              sizes="(min-width: 400px) 400px"
              srcset="
                https://s-thetic.de/images/aerzte_neu/ST22_Weiland.jpg 400w,
                https://s-thetic.de/images/aerzte_neu/ST22_Weiland.jpg 666w,
                https://s-thetic.de/images/aerzte_neu/ST22_Weiland.jpg 667w
              "
            />
          </div>
          <div class="uk-card-body">
            <h4 class="uk-h5 uk-margin-remove-bottom">Raphael Weiland</h4>
          </div>
        </div>
        <div class="uk-card-small uk-card-default uk-card-hover">
          <div class="uk-card-media-top">
            <img
              alt="Dott.ssa Camilla Chiodini "
              data-src="https://s-thetic.de/images/aerzte_neu/ST22_Chiodini.jpg"
              data-srcset="https://s-thetic.de/images/aerzte_neu/ST22_Chiodini.jpg 400w, https://s-thetic.de/images/aerzte_neu/ST22_Chiodini.jpg 666w, https://s-thetic.de/images/aerzte_neu/ST22_Chiodini.jpg 667w"
              data-sizes="(min-width: 400px) 400px"
              data-width="400"
              data-height="300"
              uk-img=""
              src="https://s-thetic.de/images/aerzte_neu/ST22_Chiodini.jpg"
              sizes="(min-width: 400px) 400px"
              srcset="
                https://s-thetic.de/images/aerzte_neu/ST22_Chiodini.jpg 400w,
                https://s-thetic.de/images/aerzte_neu/ST22_Chiodini.jpg 666w,
                https://s-thetic.de/images/aerzte_neu/ST22_Chiodini.jpg 667w
              "
            />
          </div>
          <div class="uk-card-body">
            <h4 class="uk-h5 uk-margin-remove-bottom">
              Dott.ssa Camilla Chiodini
            </h4>
          </div>
        </div>
        <div class="uk-card-small uk-card-default uk-card-hover">
          <div class="uk-card-media-top">
            <img
              alt="Derma 1"
              data-src="https://s-thetic.de/images/aerzte/grau.jpg"
              data-srcset="https://s-thetic.de/images/aerzte/grau.jpg 400w, https://s-thetic.de/images/aerzte/grau.jpg 666w, https://s-thetic.de/images/aerzte/grau.jpg 667w"
              data-sizes="(min-width: 400px) 400px"
              data-width="400"
              data-height="300"
              uk-img=""
              src="https://s-thetic.de/images/aerzte/grau.jpg"
              sizes="(min-width: 400px) 400px"
              srcset="
                https://s-thetic.de/images/aerzte/grau.jpg 400w,
                https://s-thetic.de/images/aerzte/grau.jpg 666w,
                https://s-thetic.de/images/aerzte/grau.jpg 667w
              "
            />
          </div>
          <div class="uk-card-body">
            <h4 class="uk-h5 uk-margin-remove-bottom">Derma 1</h4>
          </div>
        </div>
        <div class="uk-card-small uk-card-default uk-card-hover">
          <div class="uk-card-media-top">
            <img
              alt="Derma 2"
              data-src="https://s-thetic.de/images/aerzte/grau.jpg"
              data-srcset="https://s-thetic.de/images/aerzte/grau.jpg 400w, https://s-thetic.de/images/aerzte/grau.jpg 666w, https://s-thetic.de/images/aerzte/grau.jpg 667w"
              data-sizes="(min-width: 400px) 400px"
              data-width="400"
              data-height="300"
              uk-img=""
              src="https://s-thetic.de/images/aerzte/grau.jpg"
              sizes="(min-width: 400px) 400px"
              srcset="
                https://s-thetic.de/images/aerzte/grau.jpg 400w,
                https://s-thetic.de/images/aerzte/grau.jpg 666w,
                https://s-thetic.de/images/aerzte/grau.jpg 667w
              "
            />
          </div>
          <div class="uk-card-body">
            <h4 class="uk-h5 uk-margin-remove-bottom">Derma 2</h4>
          </div>
        </div>
      </div>
      <div class="uk-margin">
        <h3>Bitte einen Termin auswählen</h3>
        <p>Hier dann der Kalender.</p>
      </div>
      <div class="uk-margin">
        <h3>Ihre Daten</h3>
        <div
          class="uk-grid-small uk-child-width-1-1 uk-grid uk-grid-stack"
          uk-grid=""
        >
          <input type="hidden" id="agency_id" name="agency_id" value="1" />
          <div class="uk-first-column">
            <div class="uk-form-label">Anrede <sup>*</sup></div>
            <div class="uk-grid-small uk-child-width-auto uk-grid">
              <label class="uk-text-small"
                ><input
                  type="radio"
                  class="el-input uk-radio"
                  id="salutation"
                  name="salutation"
                  data-message="Anrede"
                  value="Frau"
                  checked=""
                  required=""
                />
                Frau</label
              ><label class="uk-text-small"
                ><input
                  type="radio"
                  class="el-input uk-radio"
                  id="salutation"
                  name="salutation"
                  data-message="Anrede"
                  value="Herr"
                />
                Herr</label
              >
            </div>
          </div>
          <div class="uk-grid-margin uk-first-column">
            <div class="uk-form-controls uk-inline uk-display-block">
              <input
                class="el-input uk-input"
                id="firstname"
                name="firstname"
                placeholder="Bitte geben Sie Ihren Vornamen ein. *"
                data-message="Vorname"
                required=""
              />
            </div>
          </div>
          <div class="uk-grid-margin uk-first-column">
            <div class="uk-form-controls uk-inline uk-display-block">
              <input
                class="el-input uk-input"
                id="lastname"
                name="lastname"
                placeholder="Bitte geben Sie Ihren Nachnamen ein. *"
                data-message="Nachname"
                required=""
              />
            </div>
          </div>
          <input type="hidden" id="street" name="street" />
          <input type="hidden" id="no" name="no" />
          <input type="hidden" id="zip" name="zip" />
          <input type="hidden" id="city" name="city" />
          <div class="uk-grid-margin uk-first-column">
            <div class="uk-form-controls uk-inline uk-display-block">
              <input
                class="el-input uk-input"
                id="email"
                name="email"
                placeholder="Bitte geben Sie Ihre E-Mail-Adresse ein. *"
                data-message="E-Mail-Adresse"
                required=""
                type="email"
              />
            </div>
          </div>
          <input type="hidden" id="phone" name="phone" />
          <div class="uk-grid-margin uk-first-column">
            <div class="uk-form-controls uk-inline uk-display-block">
              <input
                class="el-input uk-input"
                id="phone2"
                name="phone2"
                placeholder="Ihre Mobilnummer für Rückfragen."
              />
            </div>
          </div>
          <input type="hidden" id="birthday" name="birthday" />
          <div class="uk-grid-margin uk-first-column">
            <div class="uk-form-controls uk-inline uk-display-block">
              <label class="uk-text-small"
                ><input
                  class="el-input uk-checkbox"
                  id="newsletter"
                  name="newsletter"
                  value="1"
                  type="checkbox"
                />
                &nbsp;Ich willige ein, dass ich regelmäßig einen Newsletter von
                S-thetic erhalte.
              </label>
            </div>
          </div>
          <div class="uk-grid-margin uk-first-column">
            <div class="uk-form-controls uk-inline uk-display-block">
              <label class="uk-text-small"
                ><input
                  class="el-input uk-checkbox"
                  id="dsgvo"
                  name="dsgvo"
                  data-message="Datenschutz"
                  value="1"
                  required=""
                  type="checkbox"
                />
                &nbsp;Ich willige ein, dass meine Angaben zur Kontaktaufnahme
                und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert
                werden. Die
                <a href="/datenschutz">Datenschutzbestimmungen</a> habe ich zur
                Kenntnis genommen.</label
              >
            </div>
          </div>
          <div class="uk-grid-margin uk-first-column">
            <p>
              <small
                >Hinweis: Diese Einwilligung können Sie in einer E-Mail an
                <joomla-hidden-mail
                  is-link="1"
                  is-email="1"
                  first="aW5mbw=="
                  last="cy10aGV0aWMuZGU="
                  text="aW5mb0BzLXRoZXRpYy5kZQ=="
                  base=""
                  ><a href="mailto:info@s-thetic.de" base=""
                    >info@s-thetic.de</a
                  ></joomla-hidden-mail
                >
                jederzeit mit Wirkung für die Zukunft widerrufen.</small
              >
            </p>
          </div>
          <div class="uk-grid-margin uk-first-column">
            <div class="uk-hidden">
              <input
                class="uk-hidden"
                type="text"
                id="honey"
                name="honey"
                value="1658477805"
              />
            </div>
          </div>
          <input type="hidden" id="attention" name="attention" value="1" />
          <div class="uk-grid-margin uk-first-column">
            <button
              class="el-button uk-button uk-button-primary"
              type="submit"
              id="kickpraxisform"
            >
              Anfrage senden
            </button>
          </div>
          <input
            type="hidden"
            name="settings"
            value="emn27/Iz2/vzOHD8EhcLJA==.dkttVlZORDhCQXpaRFIwam9rYjZHc3haNTJoQ2c3S2dlZWJsR29ZbWpERVFLaGZxWElGVU5LUnVSSGJUeUhpVVBwbjJ1dDU2UUpYSHh6TDE2UHpjMzY1NWxWSTB4Vkg5SE5ONG13V1hWUWVlTGYzdXBqN2ljRThWNU1XYmFFWXE1RHVQSVRRWUF4NjdYdnYwbzFUZ1R3TFpDZmx3VjJiMzlQdmdnb3ZSWVZBaWFDeXhOamIvTzNjeUhEa2c4bjB1ZTF3c0RoUysrZDUxWk5oVGtsMHhIWTRYb0FocnJXbmZuSnc0N0lRTEJYbEt1dzV2OUc4aEVaUUlRdVRJeHdsRHhFVGNjdzRpU044c3B6NUFlcEg4dXc9PQ==.NjdkZTMyNzY0MWE0MDQxM2Y4NGMyZmZlODZiNDcyZmFkZWRhM2VhZDlhZTk4ODczMzAzZDhhYzg3YmRmYmIzNw=="
          />
          <div class="message uk-margin uk-hidden"></div>
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
