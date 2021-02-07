Vue.component("filter-el", {
  data() {
    return {
      userSearch: "",
    };
  },
  template: `<form class="header__form" action="#" @submit.prevent="$parent.$refs.products.filter(userSearch)">
            <div class="header__form-browse">
              Browse<i class="fas fa-caret-down"></i>
            </div>
            <input type="text" class="search-field" v-model="userSearch" placeholder="Search fo item..." />
            <button type="submit" class="btn-search">
              <i class="fas fa-search"></i>
            </button>
          </form>`,
});
