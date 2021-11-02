<template>
  <Layout>
    <div class="homepage-container">
      <h1>The Philosophy Dictionary</h1>
      <SearchBar :posts="$page.posts" />
      <h3 style="margin: 25px">
        Find simple definitions
      </h3>
    </div>
  
    <div v-for="edge in $page.posts.edges" :key="edge.node.id">
      <Preview :post="edge" style="margin-top: 15px;" />
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
    title: 'Home page'
  }
}
</script>

<style>

.homepage-container { 
  text-align: center;
}

</style>
