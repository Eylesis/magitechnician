<template>
    <aside :class="{ 'is-expanded': showMenu == true }">   
        <div class="logo">
            <img class="img" src="../assets/logo.png" />
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu">
                <span class="material-icons">menu</span>
            </button>
        </div>

        <h3 class="header3">Menu</h3>
        <div class="menu">
            <button class="button">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
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
    aside {
        display: flex;
        flex-direction: column;

        background-color: var(--dark);
        color: var(--light);

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
                    background-color: var(--dark);

                    .material-icons, .text {
                        color: var(--secondary);
                    }
                }
                &.router-link-exact-active{
                    background-color:var(--dark);
                    border-right: 5px solid var(--secondary);

                    .material-icons, .text {
                        color: var(--secondary);
                    }
                }
            }
        }

        &.is-expanded {
            width:var(--sidebar-width);

            .menu-toggle-wrap {
                top:-3rem;
            }

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




