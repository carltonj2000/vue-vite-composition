<template>
  <label>
    <input
      type="text"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
  </label>
  <p>{{ modelValue }}</p>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({ modelValue: String });
</script>
