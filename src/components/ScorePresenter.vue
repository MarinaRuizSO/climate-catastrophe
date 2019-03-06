<template>
  <div>
    ${{$store.state[this.resourceType]}}
  </div>
</template>

<script>
export default {
  name: 'ScorePresenter',
  props: {
    resourceType: String,
  },
};
</script>
