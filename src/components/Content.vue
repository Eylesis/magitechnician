<template>
    <main class="content">
        <Header />
        <div class="containers" @addContainer="updateContainers">
            <template v-for="container in renderContainers" >
                <component :is="container"></component>
            </template>
        </div>
    </main>
</template>

<script>
    import Header from './/Header.vue'
    import ConjurationBasic from './/containers/ConjurationBasic.vue'
    import InventoryBasic from ".//containers/InventoryBasic.vue"

    export default {
        components: { Header, ConjurationBasic, InventoryBasic },
        props: ['renderContainers'],
        data () {
            return {
                
            }
        }

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