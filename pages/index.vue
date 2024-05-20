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
      <Chatroomlist @choiceUser="choiceUser" v-if="chatListMenu==true" :chatData="chatData"/>
    </div>

    <!-- 채팅창 -->
    <div class="grid-item">
        <DefaultChatRoom v-if="user=='default'" :chatData="chatData"/>
        <ChatRoom @updateChatData="updateChatData" v-else :chatData="chatData" :user="user"/>  
    </div>
  </div>

  <footer>
    example for Btalk
  </footer>
  
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      chatmodal: false,
      friendsMenu: true,
      chatListMenu: false,
      friends: [],
      user: 'default',
      chatData: [],
    }
  },
  mounted() {
    axios.get('http://localhost:3001/userdata').then(userData => {
      this.friends = userData.data;
    }),
    axios.get('http://localhost:3001/messagedata').then( messageData => {
        this.chatData = messageData.data;
    })
  },
  methods: {
    handleMenu(data) {
      this.friendsMenu = data.friendsMenu;
      this.chatListMenu = data.chatListMenu;
    },
    choiceUser(user) {
      this.user = user;
    },
    updateChatData() {
      axios.get('http://localhost:3001/messagedata').then( messageData => {
        this.chatData = messageData.data;
      })
    }
  },
}
</script>
