<template>
  <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input 
          v-model="form.name" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group mt-3">
        <label>Task</label>
        <input
          v-model="form.task"
          class="form-control"
          type="text"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue' // onMounted : called when component is mounted
import { useRoute, useRouter } from 'vue-router'
import { getProject, updateProject } from '@/firebase.js'

  export default {
    setup() {
      // grab the user ID from the URL by calling the useRoute hook and store it in projectID - so we can use that as a reference later
      const router = useRouter()
      const route = useRoute()
      const projectId = computed(() => route.params.id)

      const form = reactive({  // where we store our v-model (data from form). When using reactive, import it in. Line 32
        name: '',  
        task: ''
      })
      onMounted(async () => {
        const project = await getProject(projectId.value)
        form.name = project.name, // setting the data from the specific project/weird firebaseID, and putting it into the variable form.name, so its shown, since it is bound with v-model - line 8
        form.task = project.task 
      })

      const update = async () => {
        await updateProject(projectId.value, {...form}) // invoking the createProject from firebase.js file. 
        router.push('/') // once function is done running, push the user to the home page. Or add /about, if thats your choice etc
        form.name = '', // emptying the strings for when the functions is done running
        form.task = '' // emptying the strings for when the functions is done running
      }

      return { form, update }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>