<template>
  <input type="text" v-model="localStateProperty" />
  <p>{{ localStateProperty }}</p>
  <input
    type="text"
    :value="localStateProperty2"
    @input="localStateProperty2 = $event.target.value"
  />
  <p>{{ localStateProperty2 }}</p>

  <MessageEditor1
    :modelValue="message1"
    @update:modelValue="message1 = $event"
  />
  <MessageEditor2
    :modelValue="message2"
    @update:modelValue="message2 = $event"
  />
  <MessageEditor2 v-model="message2a" />
  <MessageEditor3 v-model="message3" v-model:draft="isDraft3" />
  <MessageEditor4 v-model="message4" v-model:draft="isDraft4" />
</template>

<script setup>
import { ref } from "vue";
import MessageEditor1 from "./components/MessageEditor1.vue";
import MessageEditor2 from "./components/MessageEditor2.vue";
import MessageEditor3 from "./components/MessageEditor3.vue";
import MessageEditor4 from "./components/MessageEditor4.vue";

const localStateProperty = ref("local 1");
const localStateProperty2 = ref("local 2");
const message1 = ref("ME 1");
const message2 = ref("ME 2");
const message2a = ref("ME 2a");
const message3 = ref("ME 3");
const isDraft3 = ref(false);
const message4 = ref("ME 4");
const isDraft4 = ref(false);
</script>

<style>
</style>