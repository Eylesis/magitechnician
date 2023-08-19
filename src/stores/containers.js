import { defineStore } from 'pinia';

export const useContainersStore = defineStore("containers", {
    state: () => {
        return {
            validContainers: ["ResourcesPanel", "InventoryBasic"],
            renderedContainers: []
        }
    },
    actions: {
        addContainer(container) {
            if ((this.validContainers.includes(container)) && !(this.renderedContainers.includes(container))) {
                this.renderedContainers.push(container)
            } 
        },
        removeContainer(container) {
            console.log
            if ((this.validContainers.includes(container)) && (this.renderedContainers.includes(container))) {
                this.renderedContainers = this.renderedContainers.filter(function(e) {return e !== container})
            }
        }
    },
    getters: {

    }
})