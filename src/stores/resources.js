import { defineStore } from 'pinia';
export const useResourcesStore = defineStore("resources", {
    state: () => {
        return {
            actis: {
                val: 0,
                maxVal: 0
            },
            aero: {
                val: 0,
                maxVal: 0 
            },
            aether: {
                val: 0,
                maxVal: 0 
            },
            aqua: {
                val: 0,
                maxVal: 1 
            },
            figmus: {
                val: 0,
                maxVal: 1 
            },
            glimmer: {
                val: 0,
                maxVal: 0 
            },
            gold: {
                val: 0,
                maxVal: 1000 
            },
            hp: {
                val: 0,
                maxVal: 0 
            },
            knowledge: {
                val: 0,
                maxVal: 0 
            },
            mana: {
                val: 0,
                maxVal: 0 
            },
            pyro: {
                val: 0,
                maxVal: 0 
            },
            shade: {
                val: 0,
                maxVal: 0 
            },
            tempor: {
                val: 0,
                maxVal: 0 
            },
            terra: {
                val: 0,
                maxVal: 0 
            } 
        }

    },
    getters: {

    },
    actions: {
        incVal(resource, incVal) {
            resource = this.$state[resource]
            resource.val = Math.min(resource.val + incVal, resource.maxVal)
        },
        incMaxVal(resource, incVal) {
            this.$state[resource].maxVal += incVal
        }
    }
})