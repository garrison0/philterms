<template>
  <div @click="onClick" class="card push-button">
    <div class="post-link">{{index+1}}. {{post.node.title}}</div>
    <p class="post-preview">{{post.node.excerpt}}...</p>
    <small>Posted {{post.node.date | formatDate}}</small>
  </div>
</template>

<script>
export default {
  name: 'Preview',
  props: {
    post: Object,
    index: Number
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
  border: 1px solid var(--main-border-color);
  background: var(--main-bg-color);
  z-index: 1;
  transition: transform .3s;
}

.card:hover { 
  transform: translateY(-3px);
}

.post-link { 
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid var(--main-border-color); 
  width: 100%;
}

.post-preview { 
  color: var(--main-text-color);
}

small { 
  color: var(--main-text-color);
}

</style>