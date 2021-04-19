<template>
  <div class="card card-body m-3">
    <h3>Edit tasks</h3>
    <form @submit.prevent="update">
      <div class="form-group m-3">
        <label>Exciting Task 1</label>
        <input v-model="form.firstTask" class="form-control" required />
      </div>

      <!-- <div class="form-group m-3">
        <label>Time Limit</label>
        <input v-model="form.firstTaskTime" class="form-control" required />
      </div> -->

      <div class="form-group m-3">
        <label>Outrageously Motivating Task 2</label>
        <input v-model="form.secondTask" class="form-control" required />
      </div>

      <!-- <div class="form-group m-3">
        <label>Time Limit</label>
        <input v-model="form.secondTaskTime" class="form-control" required />
      </div> -->

      <div class="form-group m-3">
        <label>Extremely Energizing Task 3</label>
        <input v-model="form.thirdTask" class="form-control" required />
      </div>

      <!-- <div class="form-group m-3">
        <label>Time Limit</label>
        <input v-model="form.thirdTaskTime" class="form-control" required />
      </div> -->

      <button type="submit" class="btn btn-primary m-3">
        Save choices
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getTask, updateTask } from "@/firebase";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const taskId = computed(() => route.params.id);
    const form = reactive({
      firstTask: "",
      firstTaskTime: 0,
      secondTask: "",
      secondTaskTime: 0,
      thirdTask: "",
      thirdTaskTime: 0,
    });
    onMounted(async () => {
      const task = await getTask(taskId.value);
      console.log(task, taskId.value);
      form.firstTask = task.firstTask;
      form.firstTaskTime = task.firstTaskTime;
      form.secondTaskTime = task.secondTaskTime;
      form.thirdTaskTime = task.thirdTaskTime;
      form.secondTask = task.secondTask;
      form.thirdTask = task.thirdTask;
    });
    const update = async () => {
      await updateTask(taskId.value, { ...form });
      router.push("/getshtdone");
      form.firstTask = "";
      form.firstTaskTime = 20;
      form.secondTask = "";
      form.secondTaskTime = 20;
      form.thirdTask = "";
      form.thirdTaskTime = 20;
    };
    return { form, update };
  },
};
</script>
