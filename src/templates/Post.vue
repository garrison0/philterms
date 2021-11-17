<template>
  <Layout>
    <div class="post-container">
      <h1>{{$page.post.title}}</h1>
      <div class="content-container" v-html="$page.post.content"></div>
      <div class="related-terms" v-if="$page.post.related && $page.post.related.length"> 
        Related terms: 
        <span v-for="(term, index) in $page.post.related" :key="index">
          <a @click="clickTerm(term)">{{term | formatTerm}}</a>
          <span v-if="index !== $page.post.related.length-1">, </span>
        </span>
      </div>
      <div class="post-footer">
        <Citations :post="$page.post" />
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
    related
    authors { 
      firstName
      lastName
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Posts'
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
  border-bottom: 1px solid var(--main-border-color);
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
  color: var(--main-highlight-color);
  text-decoration: underline;
  text-decoration-color: var(--main-border-color);
}

a:hover { 
  color: var(--main-text-color);
  cursor: pointer;
  text-decoration-color: var(--main-text-color);
}

h1 { 
  margin: 0;
  border-bottom: 1px solid var(--main-border-color);
}

</style>
