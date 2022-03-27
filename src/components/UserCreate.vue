<template>
  <div class="card card-body m-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>First Exciting Task:</label>
        <input v-model="form.firstTask" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Second Outrageously Exciting Task:</label>
        <input v-model="form.secondTask" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Third Incredably Compelling Task:</label>
        <input v-model="form.thirdTask" class="form-control" required />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Save Choices
      </button>
    </form>
  </div>
</template>

<script>
import { createTask } from "@/firebase";
import { reactive } from "vue";
export default {
  setup() {
    const form = reactive({ firstTask: "", secondTask: "", thirdTask: "" });
    const onSubmit = async () => {
      await createTask({ ...form });
      form.firstTask = "";
      form.secondTask = "";
      form.thirdTask = "";
    };
    return { form, onSubmit };
  },
};
</script>
