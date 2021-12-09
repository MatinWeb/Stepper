<template>
  <div class="mt-5">
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          md="10"
          class="d-flex justify-center"
          style="background: rgb(224 247 250 / 35%)"
        >
          <CreateStepper @goStep="goStep" :step="step" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <v-expand-transition>
            <FirstPageComponent v-if="step === 1" @goNext="goNext" />
            <SecondPageComponent
              v-else-if="step === 2"
              @goBack="goBack"
              @goNext="goNext"
            />
            <ThirdPageComponent
              v-else-if="step === 3"
              @goBack="goBack"
              @goNext="goNext"
            />
            <FourthPageComponent v-else-if="step === 4" @goBack="goBack" />
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CreateStepper from "../components/CreateStepper";
import FirstPageComponent from "../components/FirstPageComponent";
import SecondPageComponent from "../components/SecondPageComponent";
import ThirdPageComponent from "../components/ThirdPageComponent";
import FourthPageComponent from "../components/FourthPageComponent";

export default {
  name: "Home",

  components: {
    CreateStepper,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
  },

  data() {
    return {
      step: 1,
    };
  },

  methods: {
    goStep(step) {
      this.step = step;
    },
    goNext() {
      this.step++;
    },
    goBack() {
      this.step--;
    },
  },
};
</script>
