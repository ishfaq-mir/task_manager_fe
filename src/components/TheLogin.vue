<template>
  <div class="container">
    <div class="card">
      <h2>Task Manager Login</h2>
      <form @submit.prevent="checkCredentials">
        <input
          type="text"
          id="username"
          name="officeEmail"
          placeholder="Username"
          v-model="officeEmail"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          placeholder="Password"
          required
        />

        <p v-if="message" class="message">Your credentials are wrong</p>

        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      officeEmail: null,
      password: null,
      message: false,
    };
  },
  methods: {
    async checkCredentials() {
      try {
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            officeEmail: this.officeEmail,
            password: this.password,
          }),
        };

        const apiUrl = `http://localhost:4000/team-members/log-in`;
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();
        if (data.status === "success") {
          localStorage.setItem("token", data.token);
          this.$router.push("/");
        } else {
          this.message = true;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
/* body {
  font-family: "Georgia", serif;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  color: #333;
} */

.container {
  margin: 0 auto;
  margin-top: 8%;
  width: 100%;
  max-width: 400px;
}

.message {
  /* color: rgba(83, 138, 189, 0.671); */
  color: whitesmoke;
  margin: 0 auto;
  margin-bottom: 8px;
}

.card {
  background-color: #ccc;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #999;
  border-radius: 4px;
  transition: border-color 0.3s ease-in-out;
  outline: none;
  color: #333;
}

input:focus {
  border-color: #666;
}

button {
  background-color: #666;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #333;
}
</style>
