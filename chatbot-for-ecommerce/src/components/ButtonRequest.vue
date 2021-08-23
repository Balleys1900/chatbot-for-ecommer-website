<template>
  <button class="btn" @click="handleClick">{{ buttonProps.text }}</button>
</template>

<script>
export default {
  name: "ButtonRequest",
  props: ["buttonProps"],
  setup(props, context) {
    const handleClick = () => {
      const next =
        props.buttonProps.event === "goto"
          ? props.buttonProps.data
          : props.buttonProps.data.next;

      const id = {
        text: props.buttonProps.text,
        next,
      };

      context.emit("handleClickNode", id);
    };

    return {
      handleClick,
    };
  },
};
</script>

<style>
.btn {
  width: 100%;
  font-weight: bold;
  background: #000;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
.btn:hover {
  background-color: #fff;
  color: #000;
}
</style>