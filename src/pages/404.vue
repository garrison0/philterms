<template>
  <Layout>
    <div class="post-container">
      <div class="content-container">
        <font-awesome :icon="['fa', 'hiking']" style="font-size:100px" /> 
        <span> You've wandered off. We can't find what you're looking for. </span>
        <g-link to="/">Keep searching for an answer.</g-link> 
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>

<style scoped>
h1 { 
  margin: 0;
  border-bottom: 1px solid var(--main-border-color);
}

.content-container { 
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--main-border-color);
}

.content-container * { 
  display: block;
  width: 100%;
  margin-bottom: 15px;
}

.date-container { 
  margin-top: 15px;
}
</style>
