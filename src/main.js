// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Preview from '~/components/Preview.vue'
import SearchBar from '~/components/SearchBar.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import moment from 'moment';

config.autoAddCss = false;
library.add(faSearch, faTimes);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Preview', Preview);
  Vue.component('SearchBar', SearchBar);
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome', FontAwesomeIcon);

  Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm A')
    }
});
}
