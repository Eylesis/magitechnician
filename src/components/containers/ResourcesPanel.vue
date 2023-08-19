<template>
    <div class="res-container">
        <div class="res-header">
            <h2>Resources</h2>
            <div class="button-container">
                <div class= "header-button">
                    <span class="material-icons" @click="minimized=!minimized">minimize</span>
                </div>
                <div class="header-button" @click="store.removeContainer('ResourcesPanel')">
                    <span class="material-icons">close</span>
                </div>
            </div>
        </div>
        <div class="res-content" :class="{ 'closed': minimized }">
            <template v-for="resource in Object.keys(resources).filter(function(k){return resources[k].maxVal>0})">
            <div class="res-item">{{ resource }}</div>
            </template>
        </div>
    </div>
</template>

<script setup>
    import { useContainersStore } from '../../stores/containers'
    import { useResourcesStore } from '../../stores/resources'
    import { ref } from 'vue'

    const store = useContainersStore();
    const resources = useResourcesStore();
    const minimized = ref(false)

</script>

<style>
    .res-container {
        width: 350px;
        margin:10px;
        background-color: var(--primary);
        /* border: 1px solid var(--secondary); */
    }
    .res-header {
        color: var(--secondary);
        border: 1px solid var(--secondary);
        padding: 5px 5px 5px 10px;
        display:flex;
        width:100%;
    }
    .button-container { 
        margin-left: auto;
        display:flex;
    }
    .header-button {
        color:var(--secondary);
        display:flex;
        cursor:pointer;
    }
    .res-content {
        height: 500px;
        overflow-y:hidden;
        border: 1px solid var(--secondary);

        transition: height 250ms ease-in-out;
    }
    .closed {
        height: 0px;
    }
</style>