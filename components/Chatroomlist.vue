<template>
    <div v-if="messengermodal == true">
        <div v-for="(chat, index) in chats" :key="index" class="chat-list" @click="chatmodalOn();">
          <h4 style="margin: 0">{{ chat.chatID }}</h4>
          <p style="margin: 5px">{{ chat.content }}</p>
        </div>
      </div>
</template>
<script>
export default {
    props: {
        messengermodal: Boolean,
    },
}
</script>