<template>
    <div class="icon">
        <button @click="personmodalOn"><img id="Person-Icon" src="../assets/img/icon-person.png" alt="Person Icon"></button>
        <button @click="messengermodalOn"><img id="Messenger-Icon" src="../assets/img/icon-message.png" alt="Messenger Icon"></button>
    </div>
</template>

<script>
export default {
    methods: {
        personmodalOn() {
            // 이벤트를 발신하여 부모 컴포넌트로 데이터 전달
            this.$emit('handleMenu', { friendsMenu: true, chatListMenu: false });
        },
        messengermodalOn() {
            this.$emit('handleMenu', { friendsMenu: false, chatListMenu: true });
        }
    },
}
</script>

<style>

</style>