<template>
  <div>
    <div class="tabs">
      <div class="tab" v-for="(style, index) in Object.values(citationStylesEnum)" :key="index"
                      @click="onClick(index)"
                      :aria-selected="index === currentIndex">
        {{style}}
      </div>
    </div>
    <div v-if="currentIndex > -1" class="citation">
      {{ formatCitation() }}
    </div>
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
      switch (Object.values(this.citationStylesEnum)[this.currentIndex]) {
        case this.citationStylesEnum.MLA:
          return "MLA";
        case this.citationStylesEnum.APA:
          return "APA";
        case this.citationStylesEnum.CHICAGO:
          return "Chicago";
        default: 
          return "";
      }
    }
  }
}
</script>

<style>

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
  background: #3a4255;
  cursor: pointer;
  transition: background .3s;
}

.tab:hover { 
  background: #1f232d;
}

.tab:active, .tab[aria-selected="true"] {
    background-color: #16181f;
}

.citation { 
  margin-top: 10px;
  padding: 10px 20px;
  border: 2px solid rgb(57,57,57);
  border-radius: 3px;
}

</style>