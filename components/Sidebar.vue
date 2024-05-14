<template>
  <div class="grid-item">
      <div class="icon">
        <!-- <button @click="personmodalOn()"><img id="Person-Icon" src="../assets/img/icon-person.png" alt="Person Icon"></button>
        <button @click="messengermodalOn()"><img id="Messenger-Icon" src="../assets/img/icon-message.png" alt="Messenger Icon"></button> -->
        <button @click="$emit('personmodalOn')"><img id="Person-Icon" src="../assets/img/icon-person.png" alt="Person Icon"></button>
        <button @click="$emit('messengermodalOn')"><img id="Messenger-Icon" src="../assets/img/icon-message.png" alt="Messenger Icon"></button>
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
    },
}
</script>

<style>

</style>