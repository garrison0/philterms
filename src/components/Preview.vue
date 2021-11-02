<template>
  <div @click="onClick" class="card">
    <div class="post-link">{{post.node.title}}</div>
    <p class="post-preview">{{post.node.excerpt}}...</p>
    <small>Posted {{post.node.date | formatDate}}</small>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: {
      post: Object
  },
  methods: {
    onClick () {
      this.$router.push(this.post.node.path);
    }
  }
}
</script>

<style>
.card {
  padding: 45px;
  margin-bottom: 15px; 
  border: 1px solid rgb(57,57,57);
  background: #16181f;
  z-index: 1;

  transition: transform .3s, color .3s, background-color .3s;
}

.card:hover { 
  background: #3a4255;
  color: #ceb983;
  cursor: pointer;
  transform: translateY(-3px);
}

.post-link { 
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid rgb(57,57,57); 
  width: 100%;
}

.post-preview { 
  color: #ebf4f1;
}

small { 
  color: #ebf4f1;
}

</style>