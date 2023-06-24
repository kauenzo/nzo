<script xmlns="http://www.w3.org/1999/html">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Home"
})
</script>

<template>
  <div>
    <h1 class="text-5xl font-bold"> JISC 2023 </h1>
    <div class="flex justify-center items-center bg-amber-400 rounded-lg h-9 mt-3 shadow-2xl">
      <img src="../assets/icons/loading.svg" alt="loading..."
           class="animate-spin w-6 h-6 ml-2"
      />
      <p class="text-base my-4 mx-2 font-bold text-black ">
        App em desenvolvimento...
      </p>
    </div>

  </div>

</template>

<style scoped>

</style>