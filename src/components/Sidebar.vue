<template>
    <aside :class="{ 'is-expanded': showMenu }">   
        <!-- <div class="logo">
            <img class="img" src="../assets/logo.png" />
        </div> -->

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="showMenu=!showMenu">
                <span class="material-icons">menu</span>
            </button>
        </div>

        <h3 class="header3">Menu</h3>
        <div class="menu">
            <button class="button" @click="store.addContainer('ConjurationBasic')">
                <span class="material-icons">auto_awesome</span>
                <span class="text">Basic Conjuration</span>
            </button>
            <button class="button" @click="store.addContainer('InventoryBasic')">
                <span class="material-icons">inventory_2</span>
                <span class="text">Inventory</span>
            </button>
        </div>

    </aside>
</template>

<script setup>
    import { useContainersStore } from '../stores/containers'
    import { ref} from 'vue'

    const store = useContainersStore()
    const showMenu = ref(false)

</script>

<style>
    aside {
        display: flex;
        flex-direction: column;

        background-color: var(--primary);
        color: var(--secondary);
        border:1px solid var(--secondary);

        width: calc(2rem + 32px);
        overflow: hidden;
        min-height: 100vh;
        padding: 1rem;

        transition: 0.2s ease-in-out;

        .flex {
		    flex: 1 1 0%;
	    }

        .logo {
            margin-bottom: 1rem;

            .img {
                width: 2rem;
            }
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;

            position:relative;
            top:0;
            transition: 0.2s ease-out;
        

            .menu-toggle {
                transition: 0.2s ease-out;

                .material-icons {
                    font-size: 2rem;
                    color: var(--secondary);
                    transition: 0.2s ease-out;
                }

                &:hover {
                    .material-icons {
                        color: var(--secondary);
                        transform: translateX(0.5rem);
                    } 
                }
            }
        }

        .header3, .button .text {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .header3 {
            color: var(--secondary);
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }
        
        .menu {
            margin: 0 -1rem;

            .button {
                border: 1px solid transparent;
                display:flex;
                align-items: center;
                text-decoration: none;

                transition: 0.2s ease-in-out;
                padding: 0.5rem 1rem;

                .material-icons {
                    font-size: 2rem;
                    color: var(--secondary);
                    transition: 0.2s ease-in-out;
                }
                .text {
                    color: var(--secondary);
                    transition: 0.2s ease-in-out;
                }

                &:hover {
                    border: 1px solid var(--secondary);

                    .material-icons, .text {
                        color: var(--secondary);
                    }
                }
            }
        }

        &.is-expanded {
            width:var(--sidebar-width);

            /* .menu-toggle-wrap {
                top:-3rem;
            } */

            .header3, .button .text {
			    opacity: 1;
		    }

            .button {
                .material-icons {
                    margin-right: 1rem;
                }
            }

        }

        @media (max-width: 1024px) {
            position: absolute;
            z-index: 99;
        }
    }
</style>




