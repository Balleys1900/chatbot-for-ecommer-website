<template>
  <div>
    <div class="item">
      <div class="icon">
        <i class="fa fa-user"></i>
      </div>
      <div class="msg">
        <p>
          {{ botMessageProps.text }}
        </p>
        <ButtonRequest
          v-for="button in buttons"
          :key="button.event === 'goto' ? button.data : button.data.next"
          :buttonProps="button"
          @handleClickNode="navigateNode"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRequest from "./ButtonRequest.vue";
import { ref, onMounted } from "vue";
export default {
  name: "BotMesssage",
  components: { ButtonRequest },
  props: ["botMessageProps"],
  setup(props, context) {
    const buttons = ref(props.botMessageProps.button);
    const navigateNode = (id) => {
      context.emit("navigateNode", id);
    };
    onMounted(() => {
      const lastItem = document.querySelectorAll(".item:last-child");
      const lastChatbotMessage = lastItem[lastItem.length - 1];
      lastChatbotMessage.scrollIntoView({ behavior: "smooth" });
    });

    return { buttons: buttons.value, navigateNode };
  },
};
</script>

<style>
.wrapper .box .item {
  display: flex;
  float: left;
  margin: 10px 0;
}

.wrapper .box .item .icon {
  background: #007bff;
  color: white;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
}

.wrapper .box .item .msg {
  background: #007bff;
  color: white;
  border-radius: 10px;
  width: 250px;
  margin-left: 10px;
}

.wrapper .box .item .msg p {
  padding: 10px;
}
</style>