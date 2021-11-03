<template>
  <Layout>
    <div class="post-container">
      <h1>{{$page.post.title}}</h1>
      <div class="content-container" v-html="$page.post.content"></div>
      <div class="related-terms" v-if="$page.post.related && $page.post.related.length"> 
        Related terms: 
        <a @click="clickTerm(term)" v-for="(term, index) in $page.post.related" :key="index">
          {{term}}
        </a>
      </div>
      <div class="post-footer">
        <Citations />
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
  },
  methods: {
    clickTerm(term) { 
      this.$router.push('/posts/' + term);
    }
  }
}
</script>

<style scoped>

.content-container { 
  padding: 10px 0;
  border-bottom: 1px solid rgb(57,57,57);
}

.post-footer { 
  display: flex;
  margin-top: 15px;
  align-items: flex-end;
}

.related-terms { 
  margin-top: 10px;
}

small { 
  flex: 1;
  text-align: end;
}

a { 
  transition: color .3s, text-decoration-color .4s;
  color: #ceb983;
  text-decoration: underline;
  text-decoration-color: rgb(57,57,57);
}

a:hover { 
  color: #ebf4f1;
  cursor: pointer;
  text-decoration-color: #ebf4f1;
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
