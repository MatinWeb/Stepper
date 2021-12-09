<template>
  <div>
    <v-card outlined>
      <v-card-title class="d-flex justify-center text-h4 my-5">
        It's Fourth Page
      </v-card-title>
      <v-card-text>
        <p class="black--text text-body-1 mb-8">Please confirm your informations:</p>
        <v-row>
          <v-col cols="12" md="6" class="d-flex justify-start align-center">
            <div class="mr-3">Your firstName:</div>
            <div>{{ informations.name }}</div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-start align-center">
            <div class="mr-3">Your lastName:</div>
            <div>{{ informations.lastName }}</div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-start align-center">
            <div class="mr-3">Your email:</div>
            <div>{{ informations.email }}</div>
          </v-col>
          <v-col cols="12" md="6" class="d-flex justify-start align-center">
            <div class="mr-3">Your phone number:</div>
            <div>{{ informations.phone }}</div>
          </v-col>
          <v-col cols="12" class="d-flex justify-start align-center">
            <div class="mr-3">Your address:</div>
            <div>{{ informations.address }}</div>
          </v-col>
        </v-row>
        <v-row class="mt-6">
          <v-col cols="12" class="d-flex justify-start align-center">
            <v-btn color="primary" @click="$emit('goBack')"> Back </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "FourthPage",
  computed: {
    ...mapState(["informations"]),
  },
};
</script>