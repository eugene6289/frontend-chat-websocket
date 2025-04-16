<template>
  <div
    class="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow-md space-y-4"
  >
    <h2 class="text-2xl font-bold text-center">註冊帳號</h2>

    <input v-model="email" type="email" placeholder="Email" class="input" />
    <input
      v-model="password"
      type="password"
      placeholder="密碼"
      class="input"
    />

    <BaseButton @click="handleRegister" class="w-full">註冊</BaseButton>
    <p class="text-sm text-gray-500 text-center">
      已有帳號？<BaseButton @click="$router.push('/login')">去登入</BaseButton>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { register } from "@/api/auth";
import { useRouter } from "vue-router";
import BaseButton from '@/components/ui/BaseButton.vue'

const email = ref("");
const password = ref("");
const router = useRouter();

const handleRegister = async () => {
  try {
    const res = await register(email.value, password.value);
    alert(`註冊成功，歡迎 ${res.data.nickname}`);
    router.push("/login");
    
  } catch (err: any) {
    alert(`註冊失敗：${err.response?.data?.message || err.message}`);
  }
};
</script>
