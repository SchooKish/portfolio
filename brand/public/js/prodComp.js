Vue.component("products", {
  data() {
    return {
      catalogUrl: "/catalogData.json",
      filtered: [],
      products: [],
    };
  },
  mounted() {
    this.$parent.getJson(`/api/products`).then((data) => {
      for (let item of data) {
        this.$data.products.push(item);
        this.$data.filtered.push(item);
      }
    });
  },
  methods: {
    filter(userSearch) {
      let regexp = new RegExp(userSearch, "i");
      this.filtered = this.products.filter((el) =>
        regexp.test(el.product_name)
      );
    },
  },
  template: `<div class="products">
               <product v-for="item of filtered" 
               :key="item.id_product" 
               :img="img"
               :product="item"
               @add-product="$parent.$refs.cart.addProduct"></product>
              </div>`,
});
Vue.component("product", {
  props: ["product"],
  template: `
  <div class="products__item1 boxitem">
                <div class="boxitem__hover">
                  <div class="boxitem__hover-wrap">
                    <button class="boxitem-button" @click="$parent.$emit('add-product', product)">
                      <img src="img/productCart.svg" alt="" />
                      Add to Cart
                    </button>
                  </div>
                  <img :src="product.img" alt="" class="products__item-img" />
                </div>
  
                <div class="products__label">
                  <div class="products__label-top"><h3>{{product.product_name}}</h3></div>
                  <div class="products__label-bottom"><p>{{product.price}}$</p></div>
                </div>
              </div>
   `,
});
