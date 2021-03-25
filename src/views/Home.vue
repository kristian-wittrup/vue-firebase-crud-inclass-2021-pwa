<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <ProjectCreate />  <!-- placement of component -->
      <ProjectList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectCreate from '@/components/ProjectCreate.vue' // so system knows where it is
import ProjectList from '@/components/ProjectList.vue'

export default {
  name: 'Home',
  components: { // register component
    ProjectCreate,
    ProjectList
  }
}
</script>
