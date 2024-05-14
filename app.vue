<template>
  <header>
    Copy messenger application
  </header>

  <div class="grid-container">
                                    <!-- sidebar -->
    <!-- <div class="grid-item">
      <div class="icon">
        <button @click="personmodalOn()"><img id="Person-Icon" src="./assets/img/icon-person.png" alt="Person Icon"></button>
        <button @click="messengermodalOn()"><img id="Messenger-Icon" src="./assets/img/icon-message.png" alt="Messenger Icon"></button>
      </div>
    </div> -->
    <Sidebar @update-modals="handleUpdateModals" :personmodal="personmodal" :messengermodal="messengermodal"/>

                          <!-- 유저(친구) 조회 모달 -->   
    <div class="grid-item">
      <!-- <div v-if="personmodal == true">
        <div v-for="(user, index) in users" :key="index" class="user-list" @click="chatmodalOn(user)">
          <img :src="require(`@/assets/img/usericon${user.icon}.png`)" alt="usericon"  class="usericon">
          <h4 style="display:inline-block;">{{ user.user }}</h4>
        </div>
      </div> -->
      <Friends :personmodal="personmodal" :users="users"/>
      <!-- 내 채팅방 목록 모달 -->
      <!-- <div v-if="messengermodal == true">
        <div v-for="(chat, index) in chats" :key="index" class="chat-list" @click="chatmodalOn();">
          <h4 style="margin: 0">{{ chat.chatID }}</h4>
          <p style="margin: 5px">{{ chat.content }}</p>
        </div>
      </div> -->
      <Chatroomlist :messengermodal="messengermodal"/>
    </div>

    <!-- 채팅창 -->
    <div class="grid-item">
      <!-- 기본 값 -->
      <div class="chat-default" v-if="chatmodal == false">
        <div class="chat-default-icon">
          <img src="./assets/img/icon-startchat.png">
          <br/><strong>start new chat</strong>
        </div>
      </div>
      <!-- 채팅 방 -->
      <div class="chat-room" v-if="chatmodal == true">
        <div v-for="(content, index) in contents" :key="index" :class="{ 'chat-room-content-send': index % 2 === 0, 'chat-room-content-receive': index % 2 !== 0 }" v-html="content">
           
        </div>
      </div>
      <div class="chat-write" v-if="chatmodal == true">
        <div class="chat-write-content" id="content" contenteditable="true" @keydown.enter.prevent="sendMessage()"></div>
        <div class="chat-write-sendbutton">
          <button style="border-color:#f0f0f0">
            <img id="sendbutton" src="./assets/img/icon-send.png" alt="sendbutton" @click="sendMessage()">
          </button>
        </div>
      </div>
    </div>
    <!-- 채팅창 끝 -->
  </div>

  <footer>
    example for Btalk
  </footer>
  <NuxtPage />
</template>

<script>
import users from './assets/data/userdata.js'
 // nuxt.config.ts에서 정의해 주었기에 더이상 import하지 않는다.
//import Friends from './components/Friends.vue';
//import Sidebar from './components/Sidebar.vue';
//import chatroomlists from './components/Chatroomlist.vue'

export default {
  name: 'App',
  // nuxt.config.ts에서 정의해 주었기에 더이상 import하지 않는다.
  // components: {
  //   Sidebar,
  //   Friends,
  //   chatroomlists,
    
  // },
  data() {
    return {
      chatmodal: false,
      personmodal: false,
      messengermodal: true,
      users : users,
      // axios로 받아와서 chatID, chatContet로 구분하여 기입.
      chats: [
      { chatID: '채팅방 1', content: '채팅 내용 1' },
      { chatID: '채팅방 2', content: '채팅 내용 2' },
      { chatID: '채팅방 3', content: '채팅 내용 3' },
      // 다른 채팅방에 대한 정보를 추가할 수 있습니다.
      ],

      // chatID에 해당하는 채팅 내용.
      contents: [
        '채팅내용',
        '채팅내용',
        '채팅내용',
        '채팅내용<br/>채팅내용',
        '채팅내용',
        '채팅내용<br/>채팅내용',
        '채팅내용<br/>채팅내용<br/>채팅내용',
        '채팅내용<br/>채팅내용',
        '채팅내용',
        '채팅내용<br/>채팅내용<br/>채팅내용',
        '채팅내용',
        '채팅내용',
        '채팅내용',
        '채팅내용',
        '채팅내용',
        '채팅내용'
      ]
    }
    
  },
  created() {
    //console.log(typeof this.personmodal);
  },
  mounted() {
   
  },
  computed:{
  },
  methods: {
    handleUpdateModals(payload) {
      // 전달된 payload를 사용하여 personmodal과 messengermodal 값을 수정
      this.personmodal = payload.personmodal;
      this.messengermodal = payload.messengermodal;
      console.log('personmodal: ' + this.personmodal);
      console.log('messengermodal: ' + this.messengermodal);
    },
    personmodalOn() {
      this.personmodal = true;
      this.messengermodal = false;
    },
    messengermodalOn() {
      this.personmodal = false;
      this.messengermodal = true;
    },
    chatmodalOn() {
      this.chatmodal = true;
    },
    handleEnter(event) {
    // 엔터 키가 눌렸을 때 실행할 코드
      if (!event.shiftKey) { // 쉬프트 키와 함께 눌리지 않은 경우에만 실행
        this.sendMessage();
      }
    },
    sendMessage() {  
      let content = document.getElementById("content").innerHTML; 
      console.log(content);
      document.getElementById("content").innerHTML='';
    }
  }
}
</script>
