<template>
    <div>
      <div v-for="(chat, index) in chatList" :key="index" class="chat-list" @click="choiceUser(chat[0])">
        <h4 style="display:inline-block; margin: 0">{{ chat[0] }}</h4>
        <p style="margin: 5px">&nbsp;{{ chat[1].Content }}</p>
        <small>&nbsp;&nbsp;{{ formatedDate(chat[1].Timestamp) }}</small>
      </div>
    </div>
</template>
<script>

export default {
    props: {
        chatData: Array,
    },
    data() {
      return {
        chatList: [],
      }
    },
    setup() {
      const formatedDate = (date) => {
        return useFormatDate(date);
      }

      return {formatedDate}
    },
    mounted() {
      this.updateChatList();
    },
    methods: {
      choiceUser(name) {
        this.$emit('choiceUser', name );
      },
      updateChatList() {
        const uniqueKeys= {};
        let tempoName;
        const reservedChatData=[];
        // for( ) {} 
        this.chatData.slice().reverse().forEach(element => {
          if (element.Recipient == 'Genie') {
              tempoName = element.Sender;
          } else {
              tempoName = element.Recipient;
          }
          if(!uniqueKeys[tempoName]) {
            uniqueKeys[tempoName] = true;
            reservedChatData.push([tempoName,element])
          }
        })
        this.chatList = reservedChatData;
      },
    },
   
    watch: {
      chatData() {
        this.updateChatList();
      }
    }
}
</script>