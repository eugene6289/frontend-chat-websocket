<!-- src/pages/Home.vue -->
<template>
  <div class="flex items-center justify-center h-screen bg-gray-100">
    <button
      @click="$router.push('/chat')"
      class="bg-blue-600 text-white text-xl px-6 py-3 rounded-xl hover:bg-blue-700 transition"
    >
      進入聊天室
    </button>
  </div>
</template>
