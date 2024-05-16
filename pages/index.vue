<template>
  <header>
    Copy messenger application
  </header>
  <!-- sidebar - menu -->
  <div class="grid-container">
    <div class="grid-item">
      <Sidebar @handleMenu="handleMenu" :friendsMenu="friendsMenu" :chatListMenu="chatListMenu"/>
    </div>
                          <!-- 친구리스트 / 채팅방 리스트 -->   
    <div class="grid-item">
      <Friends @choiceUser="choiceUser" v-if="friendsMenu==true" :friends="friends"/>
      <Chatroomlist v-if="chatListMenu==true"/>
    </div>

    <!-- 채팅창 -->
    <div class="grid-item">
        <DefaultChatRoom v-if="user=='default'" :chatData="chatData"/>
        <ChatRoom v-else :chatData="chatData" :user="user"/>  
    </div>
  </div>

  <footer>
    example for Btalk
  </footer>
  
</template>

<script>
import Friends from '@/components/Friends.vue';
import Sidebar from '@/components/Sidebar.vue';
import chatroomlists from '@/components/Chatroomlist.vue'
import ChatRoom from '@/components/ChatRoom.vue'
import axios from 'axios'

export default {
  // nuxt.config.ts에서 정의해 주었기에 더이상 import하지 않는다.
  components: {
    Sidebar,
    Friends,
    chatroomlists,
    ChatRoom,
   },

  data() {
    return {
      chatmodal: false,
      friendsMenu: false,
      chatListMenu: true,
      friends: [],
      user: 'default',
      chatData: [],
    }
  },
  mounted() {
    axios.get('http://localhost:3001/userdata').then(userData => {
      this.friends = userData.data;
    })
  },
  methods: {
    handleMenu(data) {
      // 전달된 payload를 사용하여 friendsMenu과 chatListMenu 값을 수정
      this.friendsMenu = data.friendsMenu;
      this.chatListMenu = data.chatListMenu;
    },
    friendsMenuOn() {
      this.friendsMenu = true;
      this.chatListMenu = false;
    },
    choiceUser(user) {
      axios.get('http://localhost:3001/messagedata').then( messageData => {
        this.chatData = messageData.data;
      })
      this.user = user;
      //console.log(this.chatData);
    },
    chatListMenuOn() {
      this.friendsMenu = false;
      this.chatListMenu = true;
    },
    chatmodalOn() {
      this.chatmodal = true;
      
    },
    getChatData() {
        axios.get('http://localhost:3001/messagedata').then( a => {
            console.log(a)
        }).catch(e =>{
          console.log(e)
        })
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
