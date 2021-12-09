<template>
  <div>
    <v-card outlined>
      <v-card-title class="d-flex justify-center text-h4 my-5 ">
        It's First Page
      </v-card-title>
      <v-card-text>
        <p class="black--text text-body-1 mb-8">Please enter your first name and your last name:</p>
        <v-form ref="form1">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="info.name"
                label="First Name"
                outlined
                :rules="[rules.required, rules.maxLength(info.name,10)]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="info.lastName"
                label="Last Name"
                outlined
                :rules="[rules.required, rules.maxLength(info.lastName,10)]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-row class="mt-6">
          <v-col cols="12" class="d-flex justify-end align-center">
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
  name: "FirstPage",
  mixins: [rulesMixin],
  data() {
    return {
      info: {
        name: null,
        lastName: null,
      },
    };
  },
  computed: {
    ...mapState(["informations"]),
  },
  methods: {
    ...mapMutations(["setInfo"]),
    goNext() {
      if (!this.$refs.form1.validate()) return undefined;
      this.setInfo(this.info);
      this.$emit("goNext");
    },
  },
  created() {
    if (this.informations && this.informations.name) {
      Object.keys(this.informations).forEach((key) => {
        this.$set(this.info, key, this.informations[key]);
      });
      console.log(this.info);
    }
  },
};
</script>