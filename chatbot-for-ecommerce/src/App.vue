<template>
  <div class="wrapper">
    <div class="title">SHOP XYZ!!!</div>
    <div class="box">
      <Chatframe
        v-for="content in contents"
        :key="content.messages.bot.id"
        :contentProps="content"
        @navigateNode="navigateNode"
      />
    </div>
    <FormMessage />
  </div>
</template>

<script>
import Chatframe from "./components/Chatframe.vue";
import FormMessage from "./components/FormMessage.vue";
import { ref } from "vue";
import axios from "axios";
export default {
  name: "App",
  components: { Chatframe, FormMessage },
  setup() {
    const contents = ref([]);
    const getStartConversation = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/conversation_start"
        );
        const { chatbotMes } = res.data;
        // console.log(chatbotMes.content);
        contents.value.push({
          messages: {
            bot: chatbotMes.content,
            user: { text: "" },
          },
        });
      } catch (err) {
        console.log(err);
      }
    };

    getStartConversation();

    const navigateNode = async (id) => {
      try {
        const { next } = id;
        const res = await axios.get(`http://localhost:3000/api/${next}`);
        const { chatbotMes } = res.data;
        // console.log(chatbotMes.content);
        contents.value.push({
          messages: {
            bot: chatbotMes.content,
            user: { text: id.text },
          },
        });
      } catch (err) {
        console.log(err);
      }
    };

    return { contents, navigateNode };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.wrapper {
  width: 500px;
}

.wrapper .title {
  background: #007bff;
  color: white;
  line-height: 2.5;
  border-radius: 5px 5px 0 0;
  text-align: center;
  font-size: 20px;
}
.wrapper .box {
  border: 1px solid #efefef;
  padding: 10px 15px;
  /* min-height: 400px;
  max-height: 600px; */
  height: 600px;
  overflow: scroll;
}
</style>