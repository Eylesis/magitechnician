<template>
    <main class="content">
        <Header />
        <div class="containers">
            <template v-for="container in store.renderedContainers" >
                <component :is="container" :load="log(container)"></component>
            </template>
        </div>
    </main>
</template>

<script setup>
    import Header from './/Header.vue'
    import { useContainersStore } from '../stores/containers'
    
    const store = useContainersStore()

    function log(item) {
        console.log(item)
    }
</script>

<style>
    .content {
        width: 100%;
    }

    .containers {

        display:flex;
    }
</style>