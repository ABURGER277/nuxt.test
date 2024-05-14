<template>
  <div class="grid-item">
      <div class="icon">
        <!-- <button @click="personmodalOn()"><img id="Person-Icon" src="../assets/img/icon-person.png" alt="Person Icon"></button>
        <button @click="messengermodalOn()"><img id="Messenger-Icon" src="../assets/img/icon-message.png" alt="Messenger Icon"></button> -->
        <button @click="personmodalOn"><img id="Person-Icon" src="../assets/img/icon-person.png" alt="Person Icon"></button>
        <button @click="messengermodalOn"><img id="Messenger-Icon" src="../assets/img/icon-message.png" alt="Messenger Icon"></button>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        personmodal: Boolean,
        messengermodal: Boolean,
    },
    methods: {
        // personmodalOn() {
        //     //console.log(this.personmodal);
        //     this.$emit('personmodal', true);
        //     this.$emit('messengermodal', false);
        // },
        // messengermodalOn() {
        //     //console.log(this.messengermodal);
        //     this.$emit('personmodal', false);
        //     this.$emit('messengermodal', true);
        // }
        personmodalOn() {
            // 이벤트를 발신하여 부모 컴포넌트로 데이터 전달
            this.$emit('update-modals', { personmodal: true, messengermodal: false });
        },
        messengermodalOn() {
            this.$emit('update-modals', { personmodal: false, messengermodal: true });
        }
    },
}
</script>

<style>

</style>