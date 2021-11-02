<template>
  <Layout>
    <div v-if="matchingPosts.length">
      <h1>Results for "{{this.$route.query.query}}" </h1>
      <div v-for="post in matchingPosts" :key="post.id">
        <Preview :post="post" />
      </div>
    </div>
    <div v-if="!matchingPosts.length">
      <h1>No results for "{{this.$route.query.query}}"</h1>
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
        excerpt
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
    title: 'Search results'
  },
  computed: { 
    matchingPosts: function () {
      return this.$route.query.query ? this.$page.posts.edges.filter(edge => edge.node.title.includes(this.$route.query.query)) : [];
    }
  }
}
</script>