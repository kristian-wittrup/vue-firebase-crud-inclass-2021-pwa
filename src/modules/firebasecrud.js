import { projectCollection } from '@/firebase.js'


// one overall function that contains multiple functions. create, get, update, delete project. 
// importing projectCollection from firebase, since we need the info about where to get, grab, update from.
// returning inside functions, so they are avaible outside this file and in entire project
// lastly exporting getFirebaseCRUD, so we can import back into firebase.js file
const getFirebaseCRUD = () => {

  const createProject = project => {
    return projectCollection.add(project)
  }
    
  const getProject = async id => {
    const project = await projectCollection.doc(id).get()
    return project.exists ? project.data() : null
  }
  
  const updateProject = (id, project) => {
    return projectCollection.doc(id).update(project)
  }
  
  const deleteProject = id => {
    return projectCollection.doc(id).delete()
  }

   return { createProject, getProject, updateProject, deleteProject }
}

export default getFirebaseCRUD