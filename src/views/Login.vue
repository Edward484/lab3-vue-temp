<script>
import {router} from "@/router.js";

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      errors: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    handleSubmit() {
      this.errors.email = "";
      this.errors.password = "";

      let isValid = true;
      // check localStorage
      if (this.email.length === 0  || !this.email.includes("@")) {
        this.errors.email = "Not a valid email";
        isValid = false;
      }
      if (this.password.length <= 6) {
        this.errors.password = "Not a valid password";
        isValid = false;
      }
      if (isValid) {
        this.email = "";
        this.password = "";
      }
      router.push("/products")
    }
  }
}


</script>

<template>
  <div class="login-page">
    <h1> Login</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="email">Email</label>
        <input v-model="email"/>
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>
      <div>
        <label for="password">Password</label>
        <input v-model="password"/>
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <button type="submit">Login</button>

    </form>
  </div>

</template>

<style scoped>

.login-page {
  max-width: 400px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.9em;
}

</style>