<template>
  <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        @click="$emit('goStep', item.step)"
        :disabled="item.step > step"
        :class="{activeStep : item.step === step}"
      >
        {{ item.text}}
      </v-breadcrumbs-item>
    </template>
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
</template>
<script>
export default {
  name: "createStepper",
  props: {
      step: {
          type: Number,
          default: 1
      }
  },
  data() {
    return {
      items: [
        {
          text: "First Page",
          disabled: false,
          step: 1,
        },
        {
          text: "Second Page",
          disabled: false,
          step: 2,
        },
        {
          text: "Third Page",
          disabled: true,
          step: 3,
        },
        {
          text: "Fourth Page",
          disabled: true,
          step: 4,
        },
      ],
    };
  },
};
</script>
<style scoped>
.activeStep{
    font-weight: bold;
    font-size: 1.25rem;
    color: #0097A7;
}
</style>