<template>
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
</template>

<script setup>
    import { useContainersStore } from '../../stores/containers'
    import { useResourcesStore } from '../../stores/resources'

    const store = useContainersStore();
    const resources = useResourcesStore();

</script>

<style>
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