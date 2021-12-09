<template>
  <div>
    <v-card outlined>
      <v-card-title class="d-flex justify-center text-h4 my-5">
        It's Second Page
      </v-card-title>
      <v-card-text>
        <p class="black--text text-body-1 mb-8">
          <strong class="text-h6 font-weight-black">
            {{ informations.name }} {{ informations.lastName }}
          </strong>
          dear, Please enter your email and phone number:
        </p>
        <v-form ref="form2">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="info.email"
                label="Email"
                outlined
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="info.phone"
                label="Phone"
                outlined
                :rules="[rules.required, rules.phone]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-row class="mt-6">
          <v-col cols="12" class="d-flex justify-space-between align-center">
            <v-btn color="primary" outlined @click="goBack"> Back </v-btn>
            <v-btn color="primary" @click="goNext"> Next </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import rulesMixin from "@/mixins/rulesMixin";
import { mapState, mapMutations } from "vuex";
export default {
  name: "SecondPage",
  mixins: [rulesMixin],
  data() {
    return {
      info: {
        email: null,
        phone: null,
      },
    };
  },
  computed: {
    ...mapState(["informations"]),
  },
  methods: {
    ...mapMutations(["setInfo"]),
    goNext() {
      if (!this.$refs.form2.validate()) return undefined;
      this.setInfo(this.info);
      this.$emit("goNext");
    },
    goBack() {
      this.setInfo(this.info);
      this.$emit("goBack");
    },
  },
  created() {
    if (this.informations && this.informations.email) {
      Object.keys(this.informations).forEach((key) => {
        this.$set(this.info, key, this.informations[key]);
      });
    }
  },
};
</script>