<template>
  <Sidebar />
  <Content />
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: { Sidebar, Content},
  data() {

  },
  methods: {
  }
}
</script>

<style>
  :root {
    --primary: black;
    --secondary: white;
    --dark: #2e2e2e;
    --light: #7e7e7e;
    --sidebar-width: 300px;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Monaco", monospace;

  }

  body {
    background-color: var(--primary);
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

</style>
