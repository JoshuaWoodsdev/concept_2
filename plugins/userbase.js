// plugins/userbase.js

import Userbase from 'userbase-js';
import { defineNuxtPlugin } from 'nuxt-composition-api'; // Adjust the import based on your Nuxt setup

export default defineNuxtPlugin((context, inject) => {
  inject('userbase', Userbase);
});
