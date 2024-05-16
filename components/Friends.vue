<template>
    <div>
        <div v-for="(user, index) in friends" :key="index" class="user-list" @click="choiceUser(user.name)">
          <img :src="'/_nuxt/assets/img/usericon' + user.icon + '.png'" alt="usericon" class="usericon">
          <h4 style="display:inline-block;">{{ user.name }}</h4>
        </div>
      </div>
</template>

<script>

export default {
    props: {
        friends: Array,
        personmodal: Boolean,
    },
    methods: {
        choiceUser(name) {
            this.$emit('choiceUser', name );
        }
    },
    
}
</script>