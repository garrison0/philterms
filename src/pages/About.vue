<template>
  <Layout>
    <div class="post-container">
      <h1>{{$page.pages.edges[0].node.title}}</h1>
      <div class="content-container" v-html="$page.pages.edges[0].node.content"></div>
      <div class="date-container">
        <small>Updated {{$page.pages.edges[0].node.date | formatDate}}</small>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  pages: allPageDetail ( 
    filter: 
    { 
      fileInfo: 
      { 
        name: 
        {
          in: "about"
        } 
      }
    }
  ) {
    edges {
      node {
        content
        date
        title
      }
  	}
	}
}
</page-query>

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
  padding: 10px 0;
  border-bottom: 1px solid var(--main-border-color);
}

.date-container { 
  margin-top: 15px;
}

</style>
