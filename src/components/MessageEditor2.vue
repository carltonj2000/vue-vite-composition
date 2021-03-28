<template>
  <label>
    <input type="text" v-model="message" />
  </label>
  <p>{{ message }}</p>
</template>

<script>
import { useModelWrapper } from "../utils/modelWrapper2";
export default {
  props: { modelValue: String },
  setup(props, { emit }) {
    return { message: useModelWrapper(props, emit) };
  },
};
</script>
