<template>
  <label>
    <input type="text" v-model="message" />
  </label>
  <label>
    <input
      type="checkbox"
      :checked="draft"
      @change="(event) => $emit('update:draft', event.target.checked)"
    />
  </label>
  <p>{{ message }} {{ draft }}</p>
</template>

<script>
import { useModelWrapper } from "../utils/modelWrapper3";
export default {
  props: { modelValue: String, draft: Boolean },
  setup(props, { emit }) {
    return {
      message: useModelWrapper(props, emit, "modelValue"),
      isDraft: useModelWrapper(props, emit, "draft"),
    };
  },
};
</script>
