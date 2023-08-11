<template>
    <aside :class="{ 'is-expanded': showMenu == true }">
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">menu</span>
            </button>
        </div>
    </aside>
</template>

<script>
    
    export default {
        data() {
            return {
                showMenu: false
            }
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu
            }
        }
        
    }
</script>

<style>
    .sidebarButton {
        color: white;
        border: 1px solid white;
    }
    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px);
        min-height: 100vh;
        overflow: hidden;
        padding: 1rem;

        background-color: var(--dark);
        color: var(--light);

        transition: 0.2s ease-out;

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
                    color: var(--light);
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
            
        &.is-expanded {
            width:var(--sidebar-width);
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        }
    }
</style>




<!-- 
<div class="sidebarButton">
    <svg-icon class="" type="mdi" :path="path"></svg-icon>
</div> -->