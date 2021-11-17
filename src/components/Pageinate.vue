<template>
  <div style="margin-top:15px">
    <div class="tabs">
      <div class="tab">Sort by: </div>
      <div class="tab push-button" 
            v-for="option in Object.keys(sortOptions)" :key="option"
            @click="onClickOption(option)"
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
    <div v-for="(post, index) in paginatedPosts" :key="post.node.id">
      <Preview :post="post" style="margin-top: 15px;" 
               :index="index + currentPage*numPerPage" />
    </div>
    <div class="pagination">
      <button @click="shiftPageBy(-1)">
        &laquo;
      </button>
      <button v-for="n in pagesArray" :key="n"
              @click="onClickPage(n)"
              :class="{'active': n === currentPage}"> 
        {{n+1}}
      </button>
      <button @click="shiftPageBy(1)">
        &raquo;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
    numPerPage: Number
  },
  data() { 
    const sortOptionsEnum = {'DATE': 'Date', 'TITLE': 'Title'};
    return {
      sortOptionsEnum: sortOptionsEnum,
      sortOptions: Object.values(sortOptionsEnum).reduce((o, key) => ({ ...o, [key]: 0}), {}),
      currentOption: '',
      currentPage: 0
    }
  },
  computed: {
    pagesArray() { 
      return [...Array(Math.ceil(this.posts.length / this.numPerPage)).keys()];
    },
    sortedPosts() {
      switch (this.currentOption) { 
        case this.sortOptionsEnum.DATE:
          return this.posts.sort( (a,b) => {
            if ( this.sortOptions[this.currentOption] > 0 ) {
              return new Date(b.node.date) - new Date(a.node.date);
            } else { 
              return new Date(a.node.date) - new Date(b.node.date);
            }
          });
        case this.sortOptionsEnum.TITLE:
          return this.posts.sort( (a,b) => { 
            if ( this.sortOptions[this.currentOption] > 0 ) {
              return b.node.title.localeCompare(a.node.title);
            } else { 
              return a.node.title.localeCompare(b.node.title);
            }
          });
        default:
          return this.posts;
      }
    },
    paginatedPosts() { 
      let n = this.currentPage * this.numPerPage;
      return this.sortedPosts.slice(n, n + this.numPerPage)
    }
  },
  methods: {
    onClickOption (option) {
      if (this.currentOption === option) { 
        this.sortOptions[option] = (this.sortOptions[option] + 1) % 2;
      }
      this.currentOption = option;
    },
    onClickRandom() { 
      let index = Math.floor(Math.random() * this.posts.length);
      this.$router.push( this.posts[index].node.path );
    },
    onClickPage(n) { 
      this.currentPage = n;
    },
    shiftPageBy(n) { 
      let m = this.currentPage + n;
      if (m >= 0 && m < Math.ceil(this.posts.length / this.numPerPage))
        this.currentPage = m;
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

.pagination {
  display: inline-block;
  text-align: center;
  width: 100%;
}

.pagination button {
  padding: 8px 16px;
  background: var(--main-fg-color);
  transition: background-color .3s;
}

.pagination button.active {
  background-color: var(--main-highlight-color);
  color: var(--main-mg-color);
}

.pagination button:hover:not(.active) {
  background-color: var(--main-mg-color)
}

</style>