<template>
  <div>
    <p v-bind:style="changeColor">Hello {{ userName }}!</p>
    <input id="jack" value="Jack" v-model="userName">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userName: ''
    }
  },
  computed: {
    isMarina() {
      if (this.userName == 'Marina') {
        return true
      }
      return false
    },
    changeColor() {
      if (this.isMarina) {
        return {
          color: 'red'
        };
      }
      else {
        return {
          color: 'black'
        };
      }
    }
  }
}
</script>
