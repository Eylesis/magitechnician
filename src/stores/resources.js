import { defineStore } from 'pinia';
export const useResourcesStore = defineStore("resources", {
    state: () => {
        return {
            hp: {
                val: 10,
                maxVal: 10,
                color: "#E60000"
            },
            mana: {
                val: 10,
                maxVal: 10,
                color: "#1717E8"
            },
            gold: {
                val: 0,
                maxVal: 1000
            }, 
            knowledge: {
                val: 0,
                maxVal: 1000
            },           
            aero: {
                val: 10,
                maxVal: 10,
                color: "#F0F8FF"
            },
            aqua: {
                val: 10,
                maxVal: 10,
                color: "#87CEFA"
            },
            pyro: {
                val: 10,
                maxVal: 10,
                color: " #F5510A"
            },
            terra: {
                val: 10,
                maxVal: 10,
                color: "#996633"
            },
            glimmer: {
                val: 0,
                maxVal: 0,
                color: "#761CCA"
            },
            shade: {
                val: 0,
                maxVal: 0,
                color: "#1A062D"
            },
            aether: {
                val: 0,
                maxVal: 0,
                color: "#FFF8CC"
            },
            actis: {
                val: 0,
                maxVal: 0,
                color: "#FFE6FF"
            },
            figmus: {
                val: 0,
                maxVal: 0,
                color: "#CC99FF"
            },
            tempor: {
                val: 0,
                maxVal: 0,
                color: "#CCFFDD"
            }            
        }

    },
    getters: {
        getPercent: (state) => {
            return (resource) => Math.round((state[resource].val / state[resource].maxVal) * 100)
        }
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