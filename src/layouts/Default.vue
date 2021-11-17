<template>
  <div>
    <header class="header">
      <div class="header-bar" />
      <div class="header-inner">
        <div class="site-title" :class="{'hide': $route.path !== '/'}">
          <g-link to="/"> 
            <picture>
              <source media="(min-width: 750px)" srcset="../title.png">
              <img src="../title-small.png" class="header-icon"> 
            </picture>
          </g-link>
        </div>
        <SearchBar v-if="$route.path !== '/'" :posts="$static.posts" />
        <nav class="nav">
          <g-link class="nav-link light-up" to="/">Home</g-link>
          <g-link class="nav-link light-up" to="/about/">About</g-link>
        </nav>
      </div>
    </header>
    <div class="layout">
      <div style="margin-bottom: 10px" v-if="$route.path !== '/'"> 
        <g-link to="/">Home</g-link> ▶ {{getEndOfPath}}
      </div>
      <slot/>
    </div>
    <div class="footer">
      <small>An open source project by <g-link to="https://www.garrison.fyi">Garrison McMullen</g-link> </small>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
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
</static-query>

<script>
export default {
  computed: { 
    getEndOfPath() { 
      // todo: need a more elegant solution here
      let path = this.$route.path.split('/').filter(s => s !== "");
      return path[path.length-1].replace('-', ' ');
    }
  }  
}
</script>

<style>
:root { 
  --main-bg-color: #16181f;
  --main-mg-color: #1f232d;
  --main-fg-color: #3a4255;
  --main-text-color: #ebf4f1;
  --main-highlight-color: #ceb983;
  --main-border-color: rgb(57,57,57);
}

@media screen and (max-width: 750px) { 
  body .layout { 
    padding-left: 20px;
    padding-right: 20px;
  }

  body .header-inner { 
    padding: 0 20px;
  }

  body .post-container { 
    padding: 25px!important;
  }

  body ul { 
    padding-left: 20px;
  }

  body { 
    font-size: 14px;
  }

  body h1 { 
    font-size: 2.0em!important;
  }

  body th { 
    font-size: 16px;
  }

  body tbody { 
    font-size: 12px;
  }
}

@media screen and (max-width: 475px) { 
  body .layout { 
    padding-left: 12px;
    padding-right: 12px;
  }

  body .header-inner { 
    padding: 0 12px;
  }

  body .post-container { 
    padding: 10px!important;
  }

  body .site-title.hide { 
    display: none;
  }

  body .post-footer { 
    display: inherit!important;
  }

  body .post-footer small { 
    margin-top: 10px;
    display: inline-block;
  }
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: var(--main-mg-color);
  color: var(--main-text-color);
  text-decoration: none;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 4.5rem;
}

a { 
  color: var(--main-highlight-color);
  text-decoration: underline;
  text-decoration-color: var(--main-border-color);
  transition: color .3s, text-decoration-color .4s;
}

a:hover { 
  color: var(--main-text-color);
  cursor: pointer;
  text-decoration-color: var(--main-text-color);
}

table { 
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-top: 1px solid var(--main-border-color);
}

tbody { 
  font-size: 14px;
}

tr:first-child {
  border-top: var(--main-border-color);
}

tr {
  border-bottom: var(--main-border-color);
}

th { 
  background: var(--main-mg-color);;
  height: 60px;
  padding: 0 12px;
  vertical-align: middle;
  text-align: left;
  font-size: 20px;
}

td { 
  border: 1px solid var(--main-border-color);
  border-left: none;
  border-right: none;
  padding: 16px 12px;
  padding-right: 8px;
}

td:nth-child(2n+1) {
  padding-right: 20px;
}

audio { 
  background: var(--main-highlight-color);
  margin: 5px 0;
  width: 100%;
}

td ul {
  padding-left: 12px;
}

ul {
  margin: 0;
}

li img { 
  margin: 5px 0;
}

li > :not(em, a) {
  vertical-align: middle;
}

.caption { 
  display: flex;
  text-align: center;
  flex-flow: row wrap;
}

.caption img { 
  margin: auto;
  max-width: 100%;
  width: 300px;
}

.caption em { 
  width: 100%
}

.post-container { 
  background: var(--main-bg-color);
  padding: 25px 45px;
}

.push-button {
  background: var(--main-fg-color);
  cursor: pointer;
  transition: background .3s;
}

.push-button:hover { 
  background: var(--main-mg-color);
  color: var(--main-highlight-color);
}

.push-button:active, 
.tab[aria-selected="true"], 
.push-button.active
{
  background-color: var(--main-bg-color);
  color: var(--main-highlight-color);
}

.light-up { 
  transition: background .3s, color .3s;
  text-decoration: none;
  color: var(--main-text-color);
}

.light-up:hover { 
  background: var(--main-fg-color)!important;
  color: var(--main-highlight-color);
  cursor: pointer;
}

.light-up:active {
  background: var(--main-mg-color);
}

.header {
  position: fixed;
  display: block;
  border-bottom: 1px solid var(--main-border-color);
  height: 60px;
  width: 100%;
  z-index: 9999;
  background: var(--main-mg-color);
}

.header-bar {
  background: linear-gradient(90deg,#a3d2a3,#8ed6fb 50%,#d32e9d);
  height: 2.5%;
  animation: AnimationName 26s ease-in-out infinite;
  background-size: 400% 400%;
}

@keyframes AnimationName {
  0%{background-position:0% 15%}
  50%{background-position:100% 53%}
  100%{background-position:0% 15%}
}

.header-inner { 
  display: flex;
  height: 97.5%;
  max-width: 760px;
  padding: 0 35px;
  margin: auto;
  align-items: center;
}

.header-icon { 
  height: 60px;
  max-width: 250px;
  object-fit: contain;
  display: flex;
}

.site-title { 
  flex: 1;
  margin-right: 5px;
}

.site-title a { 
  display: flex;
}

nav { 
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  padding-left: 5px;
}

.nav-link {
  flex: 1;
  display: flex;
  min-width: 50px;
  max-width: 75px;
  align-items: center;
  justify-content: center;
}

.footer { 
  text-align: center;
  margin: 20px;
  opacity: .7;
}

</style>
