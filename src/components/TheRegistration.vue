<template>
  <div class="container">
    <div class="card">
      <h2>Member Registration</h2>
      <form>
        <input
          type="email"
          id="officeEmail"
          name="officeEmail"
          placeholder="Office Email"
          required
        />
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <select name="managerId" id="manager">
          <option selected disabled>Your Manager</option>
          <option value="Sheikh Irfan">Sheikh Irfan</option>
          <option value="test2">test2</option>
          <option value="test3">test3</option>
          <option value="test4">test4</option>
        </select>

        <select name="department" id="department">
          <option value="Digital Marketting">Digital Marketting</option>
          <option selected disabled>Team Name</option>
          <option value="dept1">dept1</option>
          <option value="dept2">dept2</option>
          <option value="dept3">dept3</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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
.container {
  margin: 0 auto;
  margin-top: 8%;
  width: 100%;
  max-width: 400px;
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

select,
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
