<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "ProductsPage",
  components: {ProductList},
  data() {
    return {
      products: [],
    }
  },
  methods: {
    deleteProduct(id) {
      console.log("id", id)
    }
  },
  mounted() {
    const productsLs = JSON.parse(localStorage.getItem("products"));
    if(productsLs && productsLs.length > 0) {
      this.products = productsLs;
    }
  }
}
</script>

<template>
  <div class="products-page">
    <ProductList :products="products" @delete="deleteProduct"/>
  </div>

</template>

<style scoped>

.products-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.add-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #0056b3;
}

.view-cart-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.view-cart-button:hover {
  background-color: #218838;
}


</style>