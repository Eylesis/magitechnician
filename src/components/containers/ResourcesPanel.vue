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
            <template v-for="resource in Object.keys(resources).filter(function(k){return resources[k].maxVal>0 && resources[k].color})">
            <div class="res-item">
                <span class="res-name">{{ resource }}</span>
                <span class="res-barspan">
                    <div class="res-bar-container">
                        <div class="res-bar">
                            <div class="res-fill" :style="{ background:resources[resource].color, width: resources.getPercent(resource) + '%' }">
                                <span class="res-bar-text">{{ resources[resource].val }} / {{ resources[resource].maxVal }}</span>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
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

    .res-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
    }

    .res-name {
        flex-basis: 20%;
        margin: auto;
        margin-left: 10px;
        text-transform: capitalize;
    }

    .res-barspan {
        flex-basis: 80%;
        width:100%;
    }

    .res-bar-container{
        display: flex;
        height: 100%;
        width: 100%;
    }

    .res-bar {
        position:relative;
        text-align:center;
        background: var(--dark);
        overflow: hidden;
        padding: 5px;
        height: 2rem;
        width: -webkit-fill-available;
        border-radius: 10px;
    }
    .res-fill {
        height: 100%;
        padding: 0;
        margin: 0;
        border-radius: 10px;
    }
    .res-bar-text {
        color: var(--primary);
        background: #FFF8;
        border-radius: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 ;
        padding: 0 10px;
        height: 26px;
    }

</style>