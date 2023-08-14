<template>
    <div class="conj-container">
        <div class="conj-header">
            <h2>Basic Conjuration</h2>
            <div class="button-container">
                <div class= "header-button">
                    <span class="material-icons" @click="minimized=!minimized">minimize</span>
                </div>
                <div class="header-button" @click="store.removeContainer('ConjurationBasic')">
                    <span class="material-icons">close</span>
                </div>
            </div>
        </div>
        <div class="conj-content" :class="{ 'closed': minimized }">
            test
        </div>
    </div>
</template>

<script setup>
    import { useContainersStore } from '../../stores/containers'
    import { ref } from 'vue'

    const store = useContainersStore();
    const minimized = ref(false)

</script>

<style>
    .conj-container {
        width: 350px;
        margin:10px;
        background-color: var(--primary);
        /* border: 1px solid var(--secondary); */
    }
    .conj-header {
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
    .conj-content {
        height: 500px;
        overflow-y:hidden;
        border: 1px solid var(--secondary);

        transition: height 250ms ease-in-out;
    }
    .closed {
        height: 0px;
    }
</style>