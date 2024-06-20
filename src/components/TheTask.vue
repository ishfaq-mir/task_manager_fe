<template>
  <div class="form-container">
    <form>
      <div class="form-group">
        <label for="from">From</label>
        <input type="text" id="from" name="from" placeholder="12:00 PM" />
      </div>
      <div class="form-group">
        <label for="to">To</label>
        <input type="text" id="to" name="to" placeholder="3:00 PM" />
      </div>
      <div class="form-group">
        <textarea
          id="message"
          name="message"
          placeholder="Task description"
          style="resize: none"
        ></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Create Task</button>
      </div>
    </form>
  </div>
</template>
<script scoped>
export default {
  data() {},
  methods: {
    async createTask() {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: text }),
        };
        const response = await fetch("/api/tasks", requestOptions);
        return await response.json();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
/* body {
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #ece9e6, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
} */
.form-container {
  margin: 0 auto;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}
.form-container h2 {
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
}
.form-group {
  margin-bottom: 1rem;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #666;
}
.form-group input,
.form-group textarea {
  width: calc(100% - 1rem);
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  color: #333;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #6c63ff;
  outline: none;
  box-shadow: 0 0 5px rgba(108, 99, 255, 0.5);
}
.form-group textarea {
  height: 100px;
  resize: vertical;
}
.form-group button {
  width: 100%;
  padding: 0.75rem;
  background: #6c63ff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}
.form-group button:hover {
  background: #5753d4;
}
</style>
