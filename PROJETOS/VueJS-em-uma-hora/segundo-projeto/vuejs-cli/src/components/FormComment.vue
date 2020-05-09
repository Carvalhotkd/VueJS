<template>
  <div class="form-todo form-group">
    <p>
      <input type="text" placeholder="nome" name="author" class="form-control" v-model="name" />
    </p>
    <p>
      <textarea placeholder="Comentário" name="message" class="form-control" v-model="message"></textarea>
    </p>
    <button type="submit" @click="addComment" class="btn btn-primary">Comentar</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      message: ""
    };
  },
  methods: {
    addComment() {
      if (this.message.trim() === "") {
        return;
      }
      thos.$emit("add-comment", {
        name: this.name,
        message: this.message
      });
      this.name = "";
      this.message = "";
    }
  }
};
</script>