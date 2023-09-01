<template>
  <Sidebar />
  <Content />
</template>

<script setup>
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'
import { useContainersStore } from './stores/containers'

const store = useContainersStore();

</script>

<style>
  :root {
    --primary: black;
    --secondary: white;
    --dark: #2e2e2e;
    --light: #7e7e7e;
    --sidebar-width: 300px;
    user-select:none;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Monaco", monospace;

  }

  body {
    background-color: var(--primary);
    color: var(--secondary);
  }

  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }

  #app {
    display: flex;

    main {
      flex: 1 1 0;
      padding: 2rem;

      @media (max-width: 1024px) {
        padding-left: 6rem;
      }
    }
  }

    /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--primary);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
  }
</style>
