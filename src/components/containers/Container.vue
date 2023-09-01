<template>
    <div class="cont-container">
        <div class="cont-header">
            <h2>{{ title }}</h2>
            <div class="button-container">
                <div class= "header-button">
                    <span class="material-icons" @click="minimized=!minimized">minimize</span>
                </div>
                <div class="header-button" @click="store.removeContainer(container)">
                    <span class="material-icons">close</span>
                </div>
            </div>
        </div>
        <div class="cont-content" :class="{ 'closed': minimized }">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
    import { useContainersStore } from '../../stores/containers'
    import { ref } from 'vue'

    const store = useContainersStore();
    const minimized = ref(false)

    const props = defineProps(['title', 'container'])

</script>

<style>
    .cont-container {
        min-width: 300px;
        margin:10px;
        background-color: var(--primary);
    }
    .cont-header {
        color: var(--secondary);
        border: 1px solid var(--secondary);
        padding: 10px 10px;
        display: flex;
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
    .cont-content {
        height: 500px;
        overflow-y:hidden;
        transition: height 250ms ease-in-out;
        border: 1px solid var(--secondary);
        overflow-y: auto;
    }
    .closed {
        height: 0px;
    }
</style>