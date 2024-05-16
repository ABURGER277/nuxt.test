
<template>
    <div class="chat-room">
        <div v-for="(chat, index) in chatData" :key="index">
            <div v-if="chat.Sender==user || chat.Recipient==user">
                <div v-if="chat.Sender=='Genie'" class='chat-room-content-send'>
                    <strong>{{chat.Sender}}</strong><br/>
                    {{chat.Content}}<br/>
                    {{chat.Timestamp}} 
                </div>
                <div v-else-if="chat.Recipient == 'Genie'" class='chat-room-content-receive'>
                    {{chat.Sender}} <br/>
                    {{chat.Content}}<br/>
                    {{chat.Timestamp}}
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
import axios from 'axios'
export default {
    data() {
        return {
            messageContent: ''
        }
    },
    props: {
       user: String,
       chatData: Array,
    },

    methods: {
        sendMessage() {
            let content = this.messageContent;
            let date = new Date().toISOString().slice(0, 19);
            console.log(date);
            console.log(content);
            axios.post('http://localhost:3001/messagedata', {
                Sender: "Genie",
                Recipient: this.user,
                Content: content,
                Timestamp: date
            }).then(chatDataResult => {
                this.chatData.push(chatDataResult.data);
            })
            this.messageContent="";
        } 
    }
}
</script>