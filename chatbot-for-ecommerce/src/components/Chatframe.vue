<template>
  <div>
    <UserMessage :userMessageProps="contentProps.messages.user" />
    <br clear="both" />
    <BotMessage
      :botMessageProps="contentProps.messages.bot"
      @navigateNode="navigateNode"
    />
  </div>
</template>

<script>
import BotMessage from "./BotMessage.vue";
import UserMessage from "./UserMessage.vue";

// import { ref } from "vue";
// import axios from "axios";
export default {
  name: "Chatframe",
  components: { BotMessage, UserMessage },
  props: ["contentProps"],
  setup(props, context) {
    const navigateNode = (id) => {
      context.emit("navigateNode", id);
    };
    return { navigateNode };
  },
};
</script>

<style>
</style>