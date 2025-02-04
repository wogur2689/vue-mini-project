<script setup>
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';

</script>

<template>
    <Header/>
    <div id="container">
        <router-view />
        <Footer/>
    </div>
</template>

<style scoped>

</style>
