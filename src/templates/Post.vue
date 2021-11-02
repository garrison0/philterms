<template>
  <Layout>
    <div class="post-container">
      <h1>{{$page.post.title}}</h1>
      <div class="content-container" v-html="$page.post.content"></div>
      <div class="citations-container">
        <div class="citations">citations</div>
        <small>Posted {{$page.post.date | formatDate}}</small>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    date
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Definition'
  }
}
</script>

<style scoped>

.content-container { 
  padding: 10px 0;
  border-bottom: 1px solid rgb(57,57,57);
}

.citations-container { 
  display: flex;
  margin-top: 15px;
  align-items: center;
}

.citations { 
  flex: 1;
}

small { 
  flex: 1;
  text-align: end;
}

.post-container { 
  background: #16181f;
  padding: 25px 45px;
}

h1 { 
  font-size: 2.5rem;
  margin: 0;
  border-bottom: 1px solid rgb(57,57,57);
}

</style>
