import { defineStore } from 'pinia';

export const useContainersStore = defineStore("containers", {
    state: () => {
        return {
            validContainers: {
                "ResourcesPanel" : {
                    title: "Resources",
                    icon: "auto_awesome"
                }, 
                "InventoryBasic" : {
                    title: "Inventory",
                    icon: "inventory_2"
                }
            },
            renderedContainers: []
        }
    },
    actions: {
        addContainer(container) {
            if ((container in this.validContainers) && !(this.renderedContainers.includes(container))) {
                this.renderedContainers.push(container)
            } 
        },
        removeContainer(container) {
            console.log
            if ((container in this.validContainers) && (this.renderedContainers.includes(container))) {
                this.renderedContainers = this.renderedContainers.filter(function(e) {return e !== container})
            }
        }
    },
    getters: {

    }
})