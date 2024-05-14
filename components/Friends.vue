<template>
    <div v-if="personmodal == true">
        <div v-for="(user, index) in users" :key="index" class="user-list" @click="chatmodalOn(user)">
          <img :src="require(`@/assets/img/usericon${user.icon}.png`)" alt="usericon"  class="usericon">
          <h4 style="display:inline-block;">{{ user.user }}</h4>
        </div>
      </div>
</template>

<script>

export default {
    props: {
        users: Array,
        personmodal: Boolean,
    },
    
}
</script>