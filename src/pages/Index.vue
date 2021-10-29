<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>The Philosophy Dictionary</h1>

    <p>
      Search bar. Look up simple definitions. 
    </p>

    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <g-link class="nav__link" :to="'/posts/' + [edge.node.title]">{{edge.node.title}}</g-link>
      <div v-html="edge.node.content"></div>
    </div>

  </Layout>
</template>

<page-query>
query { 
  posts: allPost { 
    edges { 
      node { 
        id
        title
        content
        date
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
