<template>
  <div style="margin-top:15px">
    <div class="tabs">
      <div class="tab">Sort by: </div>
      <div class="tab push-button" 
            v-for="option in Object.keys(sortOptions)" :key="option"
            @click="onClick(option)"
            :aria-selected="option === currentOption">
        {{option}} 
        <font-awesome 
          :icon="['fa', 'long-arrow-alt-up']" 
          :class="{'rotate': sortOptions[option] > 0}"
        />
      </div>
    </div>
    <div class="random-button light-up" @click="onClickRandom"> 
      Random term 
      <font-awesome :icon="['fa', 'random']" /> 
    </div>
    <div v-for="post in sortedPosts" :key="post.node.id">
      <Preview :post="post" style="margin-top: 15px;" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
      posts: Object
  },
  data() { 
    const sortOptionsEnum = {'DATE': 'Date', 'TITLE': 'Title'};
    return {
      sortOptionsEnum: sortOptionsEnum,
      sortOptions: Object.values(sortOptionsEnum).reduce((o, key) => ({ ...o, [key]: 0}), {}),
      currentOption: ''
    }
  },
  computed: {
    sortedPosts() {
      switch (this.currentOption) { 
        case this.sortOptionsEnum.DATE:
          return this.posts.edges.sort( (a,b) => {
            if ( this.sortOptions[this.currentOption] > 0 ) {
              return new Date(b.node.date) - new Date(a.node.date);
            } else { 
              return new Date(a.node.date) - new Date(b.node.date);
            }
          });
        case this.sortOptionsEnum.TITLE:
          return this.posts.edges.sort( (a,b) => { 
            if ( this.sortOptions[this.currentOption] > 0 ) {
              return b.node.title.localeCompare(a.node.title);
            } else { 
              return a.node.title.localeCompare(b.node.title);
            }
          });
        default:
          return this.posts.edges;
      }
    }
  },
  methods: {
    onClick (option) {
      if (this.currentOption === option) { 
        this.sortOptions[option] = (this.sortOptions[option] + 1) % 2;
      }
      this.currentOption = option;
    },
    onClickRandom() { 
      let index = Math.floor(Math.random() * this.$page.posts.edges.length);
      this.$router.push( this.$page.posts.edges[index].node.path );
    }
  }
}
</script>

<style scoped>
svg { 
  transition: transform .3s ease-in-out;
}

.rotate { 
  transform: rotate(180deg);
}

.random-button { 
  font-weight: bold;
  padding: 5px 25px;
  max-width: 150px;
  border: 2px solid var(--main-border-color);
  background: var(--main-bg-color);
  text-align: center;
  display: inline-block;
  margin-top: 10px;
  border-radius: 4px;
}

</style>