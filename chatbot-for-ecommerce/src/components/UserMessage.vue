<template>
  <div class="item right">
    <div class="msg">
      <p :class="userMessageProps.text ? '' : 'hidden'">
        {{ userMessageProps.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserMessage",
  props: ["userMessageProps"],
};
</script>

<style>
.wrapper .box .item.right {
  float: right;
}

.wrapper .box .item.right .msg {
  background: #efefef;
  color: #333;
}
.hidden {
  display: none;
}
</style>