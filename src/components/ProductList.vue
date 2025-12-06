<script>
export default {
  name: "ProductList",
  props: {
    products: {
      type: Array,
      required: true,
    }

  }
}
</script>

<template>
  <div class="table-container">
    <table class="products-table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Nume</th>
        <th>Pret</th>
        <th>Cantitate</th>
        <th>Actiuni</th>
      </tr>

      </thead>

      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>
          <div>
            <button class="delete-button" @click="$emit('delete', product.id)" >Delete</button>
          </div>

        </td>

      </tr>
      </tbody>

    </table>

  </div>

</template>

<style scoped>
.table-container {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
}

.products-table th,
.products-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.products-table th {
  background-color: #252525;
}

.add-to-cart-button,
.edit-button,
.delete-button,
.remove-from-cart-button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart-button {
  background-color: #007bff;
  color: white;
}

.add-to-cart-button:hover {
  background-color: #0056b3;
}

.edit-button {
  background-color: #ffc107;
  color: black;
}

.edit-button:hover {
  background-color: #e0a800;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}

.delete-button:hover {
  background-color: #c82333;
}

.remove-from-cart-button {
  background-color: #17a2b8;
  color: white;
}

.remove-from-cart-button:hover {
  background-color: #138496;
}


</style>