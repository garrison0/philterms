<template>
  <div class="tabs-container">
    <div class="tabs">
      <div class="tab push-button" 
            v-for="(style, index) in Object.values(citationStylesEnum)" :key="index"
            @click="onClick(index)"
            :aria-selected="index === currentIndex">
        {{style}}
      </div>
    </div>
    <div v-if="currentIndex > -1" class="citation" v-html="formatCitation()" />
  </div>
</template>

<script>
export default {
  name: 'Citations',
  data() { 
    let citationStylesEnum = {'MLA': 'MLA', 'APA': 'APA', 'CHICAGO': 'Chicago'};
    return { 
      citationStylesEnum: citationStylesEnum,
      currentIndex: -1
    }
  },
  props: {
      post: Object
  },
  methods: {
    onClick (index) {
      this.currentIndex = index;
    },
    formatCitation () { 
      let c = "";
      switch (Object.values(this.citationStylesEnum)[this.currentIndex]) {
        case this.citationStylesEnum.APA:
          this.post.authors.forEach( author => { 
            c += author.lastName + ", " + author.firstName[0] + ". ";
          });
          c += '(' + this.$options.filters.formatDateAPA(this.post.date) + '). ';
          c += '<i>' + this.post.title + '</i>. ';
          c += this.$static.metadata.siteName + '. ';
          break;
        case this.citationStylesEnum.MLA:
          this.post.authors.forEach( author => { 
            c += author.lastName + ", " + author.firstName + ". ";
          });
          c += '"' + this.post.title + '." ';
          c += "<i>" + this.$static.metadata.siteName + "</i>, ";
          c += this.$options.filters.formatDateMLA(this.post.date) + ', ';
          break;
        case this.citationStylesEnum.CHICAGO:
          c += this.$static.metadata.siteName + '. ';
          c += '"' + this.post.title + '."';
          c += " Last modified "
          c += this.$options.filters.formatDateChicago(this.post.date) + ". ";
          break;
      }
      c += this.$static.metadata.siteUrl + this.$route.fullPath;
      return c;
    }
  }
}
</script>

<static-query>
query { 
  metadata {
    siteName
    siteUrl
  }
}
</static-query>

<style>

.tabs-container { 
  flex: 2;
}

.tabs { 
  display: inline-flex;
  border: 2px solid rgb(57,57,57);
  border-radius: 4px;
  font-weight: bold;
  user-select: none;
}

.tabs .tab:nth-child(n+2) {
  border-left: 2px solid rgb(57,57,57);
}

.tab {
  padding: 5px 20px;
}

.citation { 
  margin-top: 10px;
  padding: 10px 20px;
  border: 2px solid rgb(57,57,57);
  border-radius: 3px;
}

</style>