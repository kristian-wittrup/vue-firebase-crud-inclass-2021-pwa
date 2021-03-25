import { projectCollection } from '@/firebase.js'


// one function that contains one function. create => You can do similar with the others 
// importing projectCollection from firebase, since we need the info about where to get, grab, update from.
// returning inside functions, so they are avaible outside this file and in entire project
// lastly exporting getFirebaseCRUD, so we can import back into firebase.js file

const createProjects = () => {
  const createProject = project => {
    return projectCollection.add(project)
  }
  return { createProject }
}

export default createProjects