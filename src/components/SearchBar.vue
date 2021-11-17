<template>
  <div class="searchbox">
    <form @submit.stop.prevent="submitSearch" 
          @keydown.up.stop.prevent 
          @keydown.down.stop.prevent
          @keyup="this.nextItem"
          @keydown.delete="currentItem = -1">
      <div class="input-container">
        <input type="text"
          :value="searchTerm"
          @input="e => searchTerm = e.target.value"
          label="Search (e.g., de re, de dicto, ...)"
          placeholder="Search (e.g., de re, de dicto, ...)"> 
        <div class="clear-button">
          <a class="clear-link hoverCircle effect sub-b" v-if="searchTerm !== ''"
              @click="resetInput">
            <font-awesome :icon="['fa', 'times']" />
          </a>
        </div> 
      </div>
      <ul class="autocomplete-results" v-bind:class="{ 'autocomplete-border': matchingPosts.length }">
        <li class="autocomplete-result" v-bind:class="{ 'autocomplete-selected': currentItem == index }" 
            v-for="(post, index) in matchingPosts" :key="post.node.id"
            @click="submitAutocomplete(post)">
            <div style="overflow:hidden; text-overflow:ellipsis" v-html="highlight(post.node.title)"></div>
        </li>
      </ul>
    </form>

    <button class="push-button button-search" @click="submitSearch()">
      <font-awesome :icon="['fa', 'search']" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
      posts: Object
  },
  data() { 
    return { 
      searchTerm: '',
      currentItem: -1
    }
  },
  computed: {
    matchingPosts: function () {
      return this.searchTerm 
      ? this.posts.edges.filter(edge => edge.node.title.includes(this.searchTerm.toLowerCase())) 
      : [];
    }
  },
  methods: {
    resetInput() { 
      this.searchTerm = '';
      this.currentItem = -1;
    },
    submitSearch() {
      if (this.currentItem > -1) {
        this.submitAutocomplete(this.matchingPosts[this.currentItem]);
      } else { 
        this.$router.push({path: '/search', query:{query: this.searchTerm}});
      }
      this.resetInput();
    },
    submitAutocomplete(post) { 
      this.$router.push(post.node.path);
      this.resetInput();
    },
    highlight(title) {
      if(!this.searchTerm) {
          return title; 
      }
      return title.replace(new RegExp(this.searchTerm, "gi"), match => {
          return '<span class="highlight">' + match + '</span>';
      });
    },
    nextItem() { 
      // cycle through autocomplete results
      if(this.matchingPosts && this.matchingPosts.length) { 
        // up arrow
        if (event.keyCode == 38) { 
          if (this.currentItem <= 0) { 
            this.currentItem = this.matchingPosts.length - 1;
          } else { 
            this.currentItem = this.currentItem - 1;
          }
        // down arrow
        } else if (event.keyCode == 40) { 
          this.currentItem = (this.currentItem + 1) % this.matchingPosts.length;
        }
      }
    }
  }
}
</script>

<style>
.autocomplete-results {
  width: 99.8%; /* 100% does not line up - ? */
  position: absolute;
  font-size: 1.0em;
  background: var(--main-mg-color);
  list-style: none;
  text-align: left;
  margin-top: 3.0rem;
  z-index: 2;
  padding: 0;
  background: var(--main-bg-color);
}

.autocomplete-border { 
  border: 1px solid var(--main-border-color);
  border-top: none;
}

.autocomplete-result { 
  padding: 6px 6px;
}

.autocomplete-result:hover { 
  background: var(--main-fg-color);
  cursor: pointer;
}

.autocomplete-selected { 
  background: var(--main-fg-color);
}

.highlight {
  color: var(--main-highlight-color);
  font-weight: bold;
}

.searchbox { 
  display: flex;
  flex: 2;
  margin: auto;

  background: var(--main-bg-color);
  height: 3.0rem;
  width: 500px;
  max-width: 100%;
}

form { 
  display: flex;
  flex: 1;
  position: relative;
}

.input-container { 
  display: flex;
  flex: 1;
  padding: 2px 6px;

  border: 1px solid var(--main-border-color);
  border-right: none;
}

input { 
  border: 0; 
  width: 100%; 
  color: inherit; 
  background: inherit;
  font-size: 1.0em;
  outline: none;
}

.input-container:focus-within { 
  border: 1px solid var(--main-highlight-color);
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
}

.clear-button { 
  width: 46px;
  display: flex;
  z-index: 5;
}

.clear-link { 
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.hoverCircle {
  cursor: pointer;
  border-radius: 100%;
  position: relative;
} 

.hoverCircle:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  content:'';
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.hoverCircle.effect {
  box-shadow: none;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  transition: color 0.3s;
}
.hoverCircle.effect:after {
  top: -2px;
  left: -2px;
  padding: 2px;
  z-index: -1;
  background: #fff;
  -webkit-transition: -webkit-transform 0.2s, opacity 0.3s;
  -moz-transition: -moz-transform 0.2s, opacity 0.3s;
  transition: transform 0.2s, opacity 0.3s;
}

.hoverCircle.effect.sub-b, .hoverCircle.effect-3.sub-b i {
  color: #fff;
}
.hoverCircle.effect.sub-b:hover, .hoverCircle.effect-3.sub-b:hover i {
  color: var(--main-mg-color);
}
.hoverCircle.effect.sub-b:after {
  -webkit-transform: scale(1.3);
  -moz-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
  opacity: 0;
}
.hoverCircle.effect.sub-b:hover:after {
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 1;
}

.button-search { 
  border-radius: 0 2px 2px 0;
  margin: 0;
}

button {
  border: 1px solid var(--main-border-color);
  width: 3rem;
  color: inherit;
}

</style>