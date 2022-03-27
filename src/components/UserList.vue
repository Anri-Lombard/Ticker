<template>
  <section>
    <div class="card m-4 black_text">
      <table class="table m-2">
        <thead>
          <tr>
            <th scope="col">First Task</th>
            <th scope="col">Second Task</th>
            <th scope="col">Third Task</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="{ id, firstTask, secondTask, thirdTask } in tasks"
            :key="id"
          >
            <td>{{ firstTask }}</td>
            <td>{{ secondTask }}</td>
            <td>{{ thirdTask }}</td>
            <td>
              <router-link :to="`/edit/${id}`">
                <button class="btn btn-primary btn-sm me-2">
                  Edit
                </button>
              </router-link>
              <!-- <button class="btn btn-danger btn-sm" @click="deleteItem(id)">
                Delete
              </button> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { useLoadTasks, deleteTask } from "@/firebase";
export default {
  setup() {
    const tasks = useLoadTasks();
    return { tasks, deleteTask };
  },
};
</script>
