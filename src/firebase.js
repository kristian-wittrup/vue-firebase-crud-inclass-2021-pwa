import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'
import getFirebaseCRUD from './modules/firebasecrud';
// import createProjects from './modules/firebaseCreate';

const config = {
  apiKey: "AIzaSyB1-wNwR9I8Q41XTcEs7kDhI07E_5dpw0U",
  authDomain: "vue-crud-inclass.firebaseapp.com",
  projectId: "vue-crud-inclass",
  storageBucket: "vue-crud-inclass.appspot.com",
  messagingSenderId: "802036065562",
  appId: "1:802036065562:web:38d4263f858a20d63438a3"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore()

/////////////////// add export if you are using compsosable functions (importing from another file) - remove export if all is in this file
export const projectCollection = db.collection('projects')

/////////////////// grabbing 4 functions from firebasecrud.js (remember to import it! Line: 3)
export const { createProject, getProject, updateProject, deleteProject } = getFirebaseCRUD()

/////////////////// grabbing 1 function from firebaseCreate.js (remember to import it! Line: 3)
//export const { createProject } = createProjects()




/////////////////// Export all into composable functions
/*
export const createProject = project => {
  return projectCollection.add(project)
}

export const getProject = async id => {
  const project = await projectCollection.doc(id).get()
  return project.exists ? project.data() : null
}

export const updateProject = (id, project) => {
  return projectCollection.doc(id).update(project)
}

export const deleteProject = id => {
  return projectCollection.doc(id).delete()
}
*/




export const useLoadProjects = () => {
  const projects = ref([])
  const close = projectCollection.onSnapshot(snapshot => {
    projects.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  })
  onUnmounted(close)
  return projects
}