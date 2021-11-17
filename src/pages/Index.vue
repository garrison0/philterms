<template>
  <Layout>
    <div class="homepage-container">
      <h1>The Philosophy Dictionary</h1>
      <SearchBar :posts="$page.posts" />
      <h3 style="margin: 25px">
        Find simple definitions
      </h3>
      <div class="random-button light-up" @click="onClick"> 
        Random term 
        <font-awesome :icon="['fa', 'random']" /> 
      </div>
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
  },
  methods: { 
    onClick() { 
      let index = Math.floor(Math.random() * this.$page.posts.edges.length);
      this.$router.push( this.$page.posts.edges[index].node.path );
    }
  }
}
</script>

<style>

.homepage-container { 
  text-align: center;
}

.random-button { 
  margin: auto;
  max-width: 150px;
  font-weight: bold;
  padding: 20px 25px;
  border: 1px solid var(--main-border-color);
  background: var(--main-bg-color);
}

</style>
