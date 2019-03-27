<template>
  <div>
    <Close></Close>
    <h1>{{ heading }}</h1>
    <p>{{ information }}</p>
  </div>
</template>

<script>
import Close from './Close.vue';

export default {
  components: {
    Close,
  },
  props: {
    heading: String,
    information: String,
  },
};
</script>
