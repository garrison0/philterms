<template>
  <Layout>
    <h1>{{$page.post.title}}</h1>
    <p v-html="$page.post.content"></p>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
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
