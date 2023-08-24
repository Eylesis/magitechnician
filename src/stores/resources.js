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
                val: 100,
                maxVal: 100,
                color: "#F0F8FF"
            },
            aqua: {
                val: 100,
                maxVal: 100,
                color: "#87CEFA"
            },
            pyro: {
                val: 100,
                maxVal: 100,
                color: " #F5510A"
            },
            terra: {
                val: 100,
                maxVal: 100,
                color: "#996633"
            },
            glimmer: {
                val: 100,
                maxVal: 100,
                color: "#761CCA"
            },
            shade: {
                val: 100,
                maxVal: 100,
                color: "#1A062D"
            },
            aether: {
                val: 100,
                maxVal: 100,
                color: "#FFF8CC"
            },
            actis: {
                val: 100,
                maxVal: 100,
                color: "#FFE6FF"
            },
            figmus: {
                val: 100,
                maxVal: 100,
                color: "#CC99FF"
            },
            tempor: {
                val: 100,
                maxVal: 100,
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