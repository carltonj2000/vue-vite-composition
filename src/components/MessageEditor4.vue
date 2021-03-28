<template>
  <label><input type="text" v-model="message" /></label>
  <label><input type="checkbox" v-model="isDraft" /></label>
  <p>{{ message }} {{ isDraft }}</p>
</template>

<script>
import { useModelWrapper } from "../utils/modelWrapper3";
import { useMessageReset } from "../utils/messageReset4";
export default {
  props: { modelValue: String, draft: Boolean },
  setup(props, { emit }) {
    const message = useModelWrapper(props, emit);
    useMessageReset(message);
    return {
      message,
      isDraft: useModelWrapper(props, emit, "draft"),
    };
  },
};
</script>
