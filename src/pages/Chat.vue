<template>
  <div class="min-h-screen bg-gray-200 flex items-center justify-center p-4">
    <div class="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 flex flex-col h-[600px]">
      <h2 class="text-2xl font-bold mb-4 text-center text-blue-700">聊天室</h2>

      <!-- 訊息區塊 -->
      <div class="flex-1 overflow-y-auto space-y-2 p-2 border border-gray-300 rounded-lg bg-gray-50">
        <div
          v-for="(msg, index) in messages"
          :key="index"
          :class="[
            'flex',
            msg.user === nickname ? 'justify-end' : 'justify-start'
          ]"
        >
          <div
            :class="[
              'px-4 py-2 rounded-xl max-w-[70%] whitespace-pre-wrap',
              msg.user === nickname
                ? 'bg-blue-500 text-white text-right rounded-br-none'
                : 'bg-white text-gray-800 text-left rounded-bl-none border border-gray-300'
            ]"
          >
            <div class="text-xs font-semibold mb-1">
              {{ msg.user }}
            </div>
            <div>{{ msg.text }}</div>
          </div>
        </div>
      </div>


      <!-- 輸入區塊 -->
      <div class="flex mt-4 gap-2">
        <input
          v-model="message"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="輸入訊息..."
          class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <BaseButton @click="sendMessage">送出</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import { ref, onMounted } from "vue";
import socket from "../socket";
import api from "@/api/index";

const nickname = ref('');

const message = ref("");
const messages = ref<{ user: string; text: string }[]>([]);

onMounted(async () => {
  // Step 1: 從後端拉歷史訊息
  const res = await api.get('/messages')
  messages.value = res.data

  // Step 2: 接 WebSocket
  socket.on("your-ip", (ip: string) => {
    nickname.value = ip;
  });

  socket.on("message", (data: { user: string; text: string }) => {
    messages.value.push(data);
  });
});


const sendMessage = () => {
  if (message.value.trim()) {
    socket.emit("message", message.value);
    message.value = "";
  }
};
</script>
