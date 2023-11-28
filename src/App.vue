<template>
  <NavBar></NavBar>
  <div class="flex flex-col min-h-screen">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue'
export default {
  components: { NavBar, Footer }
}

</script>


