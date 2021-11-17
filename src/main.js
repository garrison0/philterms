// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Preview from '~/components/Preview.vue'
import SearchBar from '~/components/SearchBar.vue'
import Citations from '~/components/Citations.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes, faRandom, faHiking } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import moment from 'moment';

config.autoAddCss = false;
library.add(faSearch, faTimes, faRandom, faHiking);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Preview', Preview);
  Vue.component('SearchBar', SearchBar);
  Vue.component('Citations', Citations);
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);

  Vue.filter('formatTerm', function(value) {
    if (value) {
      return value.replace('-', ' ');
    }
  });

  Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('MM/DD/YYYY')
    }
  });

  Vue.filter('formatDateChicago', function(value) {
    if (value) {
      return moment(String(value)).format('MMMM DD, YYYY')
    }
  });
  
  Vue.filter('formatDateMLA', function(value) {
    if (value) {
      return moment(String(value)).format('DD MMM. YYYY');
    }
  });

  Vue.filter('formatDateAPA', function(value) {
    if (value) {
      return moment(String(value)).format('YYYY, MMMM DD');
    }
  });
}
