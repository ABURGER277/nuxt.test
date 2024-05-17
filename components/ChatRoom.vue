
<template>
    <div class="chat-room" ref="chatRoom">
        <div v-for="(chat, index) in chatData" :key="index">
            <div v-if="chat.Sender==user || chat.Recipient==user">
                <div v-if="chat.Sender=='Genie'" class='chat-room-content-send'>
                    <strong>{{chat.Sender}}</strong><br/>
                    {{chat.Content}}<br/>
                    <small>{{ formatedDate(chat.Timestamp) }}</small> 
                </div>
                <div v-else-if="chat.Recipient == 'Genie'" class='chat-room-content-receive'>
                    <strong>{{chat.Sender}}</strong><br/>
                    {{chat.Content}}<br/>
                    <small>{{ formatedDate(chat.Timestamp) }}</small> 
                </div> 
            </div>
            <div v-else style="margin:0; padding:0">
            </div>    
        </div>
    </div>
    <div class="chat-write">
        <input type="text" v-model="messageContent" class="chat-write-content" @keydown.enter.prevent="sendMessage()"/>
        <!-- <div class="chat-write-content" id="content" contenteditable="true" @keydown.enter.prevent="sendMessage()"></div> -->
        <div class="chat-write-sendbutton">
            <button style="border-color:#f0f0f0">
            <img id="sendbutton" src="@/assets/img/icon-send.png" alt="sendbutton" @click="sendMessage()">
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            messageContent: ''
        }
    },
    setup() {
      const formatedDate = (date) => {
        return useFormatDate(date);
      }

      return {formatedDate}
    },
    mounted() {
        this.scrollToBottom();
    },
    updated() {
        this.scrollToBottom();
    },
    props: {
       user: String,
       chatData: Array,
    },
    methods: {
        sendMessage() {
            let content = this.messageContent;
            if(content == '') return;
            const timeZone = 'Asia/Seoul';
            const options = { timeZone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

            // Get the formatted date string
            const date = new Date();
            const dateString = date.toLocaleString('en-US', options);
            
            // Split the date string into date and time
            const [datePart, timePart] = dateString.split(', ');
            const [month, day, year] = datePart.split('/');
            const [hour, minute, second] = timePart.split(':');

            // Format the date to the desired output
            const koreanTime = `${year}-${month}-${day}T${hour}:${minute}:${second}`;
            console.log(koreanTime);
            console.log(content);
            axios.post('http://localhost:3001/messagedata', {
                Sender: "Genie",
                Recipient: this.user,
                Content: content,
                Timestamp: koreanTime
            }).then(chatDataResult => {
                this.chatData.push(chatDataResult.data);
                this.$emit('updateChatData', this.chatData);
            })
            this.messageContent="";
        },
        scrollToBottom() {
            const chatRoom = this.$refs.chatRoom;
            if (chatRoom) {
                chatRoom.scrollTop = chatRoom.scrollHeight;
            }
        },
    }
}
</script>