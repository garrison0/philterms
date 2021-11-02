<template>
  <Layout>
    <div class="about-container">
      <h1>{{$page.pages.edges[0].node.title}}</h1>
      <div class="content-container" v-html="$page.pages.edges[0].node.intro"></div>
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
        title 
        date
        intro
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
.about-container { 
  background: #16181f;
  padding: 25px 45px;
}
h1 { 
  font-size: 2.5rem;
  margin: 0;
  border-bottom: 1px solid rgb(57,57,57);
}
.content-container { 
  padding: 10px 0;
  border-bottom: 1px solid rgb(57,57,57);
}
.date-container { 
  margin-top: 15px;
}
</style>
