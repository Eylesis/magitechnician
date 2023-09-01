<template>
    <main class="content">
        <Header />
        <div class="containers">
            <template v-for="container in store.renderedContainers" >
                <Container :title="store.validContainers[container].title" :container="container">
                    <component :is="container"></component>
                </Container>
            </template>
        </div>
    </main>
</template>

<script setup>
    import Header from './/Header.vue'
    import Container from './/containers/Container.vue'
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