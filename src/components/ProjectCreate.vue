<template>
 <div class="card card-body mt-4">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">    
      <div class="form-group">
        <label>Name</label>
        <input 
          type="text" 
          v-model="form.name" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group mt-3">
        <label>Task</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.task"
          required
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create Project
      </button>
    </form>
  </div>
</template>

<script>
import { createProject } from '@/firebase.js'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ // where we store our v-model (data from form). When using reactive, import it in. Line 34
      name: '',
      task: ''
    })

    const onSubmit = async () => { // calling the submit function line 4
      await createProject({...form}) // invoking the createProject from firebase.js file. 
      form.name = '', // emptying the strings for when the functions is done running
      form.task= ''
    }

    return { form, onSubmit }

  }
}
</script>

<style lang="scss">

</style>
