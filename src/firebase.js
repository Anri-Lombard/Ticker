import firebase from "firebase";
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyAOKVbugfjH_N9gicliwsgTVU6z1kJDbGU",
  authDomain: "ticker-b8e09.firebaseapp.com",
  projectId: "ticker-b8e09",
  storageBucket: "ticker-b8e09.appspot.com",
  messagingSenderId: "926956032592",
  appId: "1:926956032592:web:092d90713a8484533af755",
  measurementId: "G-R2ZE0VZJQ6",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const taskCollection = db.collection("tasks");

export const createTask = (task) => {
  return taskCollection.add(task);
};

export const getTask = async (id) => {
  const user = await taskCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateTask = (id, task) => {
  return taskCollection.doc(id).update(task);
};

export const deleteTask = (id) => {
  return taskCollection.doc(id).delete();
};

export const useLoadTasks = () => {
  const tasks = ref([]);
  const close = taskCollection.onSnapshot((snapshot) => {
    tasks.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return tasks;
};
