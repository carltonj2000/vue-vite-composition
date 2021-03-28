import { watch } from "vue";
export function useMessageReset(message) {
  let timeoutId;
  const reset = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => (message.value = ""), 5000);
  };
  reset();
  watch(message, () => message.value !== "" && reset());
}
