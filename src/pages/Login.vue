<!-- src/pages/Login.vue -->
<template>
  <div class="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded-xl space-y-4">
    <h2 class="text-2xl font-bold text-center">登入</h2>
    <input v-model="email" placeholder="Email" class="input" />
    <input
      v-model="password"
      type="password"
      placeholder="密碼"
      class="input"
      @keyup.enter="handleLogin"
    />
    <button class="btn" @click="handleLogin">登入</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { login } from "@/api/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  try {
    const res = await login(email.value, password.value);
    localStorage.setItem("token", res.data.token);
    alert("登入成功！");
    router.push("/home");
  } catch (e: any) {
    alert(e.response?.data?.message || "登入失敗");
  }
};
</script>
