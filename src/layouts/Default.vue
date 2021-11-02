<template>
  <div>
    <header class="header">
      <div class="header-bar" />
      <div class="header-inner">
        <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <SearchBar v-if="$route.path !== '/'" :posts="$static.posts" />
        <nav class="nav">
          <g-link class="nav-link" to="/">Home</g-link>
          <g-link class="nav-link" to="/about/">About</g-link>
        </nav>
      </div>
    </header>
    <div class="layout">
      <slot/>
    </div>
    <div class="footer">
      <small>© 2021 <a href="https://www.moodmusic.me">Garrison McMullen</a></small>
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

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: #1f232d;
  color: #ebf4f1;
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
  color: white;
  text-decoration: none;
}

.header {
  position: fixed;
  display: block;
  border-bottom: 1px solid rgb(25,25,25);
  height: 60px;
  width: 100%;
  z-index: 9999;
  background: #1f232dDD;
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

strong { 
  flex: 1;
  min-width: 225px;
  font-size: 1.5rem;
}

nav { 
  flex: 1;
  display: flex;
  justify-content: flex-end;
  height: 100%;
}

.nav-link {
  flex: 1;
  display: flex;
  max-width: 75px;
  align-items: center;
  justify-content: center;
  transition: background .3s, color .3s;
}

.nav-link:hover { 
  background: #3a4255;
  color: #ceb983;
  cursor: pointer;
}

.footer { 
  text-align: center;
  margin: 20px;
  opacity: 40%;
}

</style>
