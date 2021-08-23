<template>
  <div class="typing-area">
    <div class="input-field">
      <input type="text" placeholder="Type your message" required />
      <button>Send</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormMessage",
};
</script>

<style>
.wrapper .typing-area {
  width: 100%;
  background: #efefef;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.wrapper .typing-area .input-field {
  width: 100%;
  position: relative;
}

.wrapper .typing-area .input-field input {
  width: 100%;
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  padding-right: 70px;
  font-family: "Poppins", sans-serif;
  transition: 0.3s all ease;
}

.wrapper .typing-area .input-field input:focus {
  border-color: #007bff;
}

.wrapper .typing-area .input-field button {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background: transparent;
  border: 1px solid #007bff;
  padding: 5px 10px;
  border-radius: 3px;
  color: #007bff;
  outline: none;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: 0.3s all ease;
}

.wrapper .typing-area .input-field button:hover {
  background: #007bff;
  color: white;
}

.wrapper .typing-area .input-field input:valid ~ button {
  opacity: 1;
  pointer-events: auto;
}
</style>