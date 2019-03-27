<template>
  <div v-on:click="$store.commit('changeDisplay', 'None')" class="close">Close</div>
</template>

<style>

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #000;
}

</style>
