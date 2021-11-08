<template>
    <div class="container">
      <div class="main-content">
        <p class="materialDetails-info">
          The one stop shop for all your material cutting needs. Most common
          materials available to order online. If you can't see your required
          material, send us an enquiry and we will do our best to supply it.
          Partial or full fabrication of almost any product is available
        </p>
        <section class="material-types">
          <div class="cards">
            <div
              v-for="(type, index) in material.types"
              :value="index"
              :key="type.slug"
              class="card"
            >
              <router-link
                :to="{
                  name: 'materialOrder',
                  params: { materialTypeSlug: type.slug },
                }"
              >
                <div class="card_text">
                  <h2>{{ type.name }}</h2>
                </div>
                <img
                  :src="require(`@/assets/${type.image}`)"
                  :alt="type.name"
                />
              </router-link>
            </div>
          </div>
        </section>

      </div>
      <div class="fab-products">
        <div class="fab-title">
          <h2>Products we Fabricate</h2>
        </div>
        <section class="products">
          <div
            v-for="(product, index) in material.productsWeFabricate"
            :key="index"
            :value="index"
            class="card"
          >
            <div class="card_text">
              <h2>{{ product.name }}</h2>
            </div>
            <img
              :src="require(`@/assets/${product.product}`)"
              :alt="product.product"
            />
          </div>
        </section>
      </div>
    </div>
</template>

<script>
import data from "../data";
export default {
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    material() {
      return data.materials.find((material) => material.slug === this.slug);
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  background-image: url("../assets/cnc3-edit.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: auto;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  border: 1px solid black;
}

.materialDetails-info {
  padding-top: 50px;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-weight: 700;
  color: black;
  text-align: center;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  padding: 1rem;
}
.card a {
  text-decoration: none;
}
.card_text:hover {
  color: yellow;
}
.card_text {
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 20px 0;
}

.products {
  display: flex;
  flex-direction: row;
  /* background-color: rgba(0, 0, 0, 0.8); */
  overflow-x: auto;
}

.products .card {
  margin: 0 auto;
  padding: 10px 1rem;
}

.products .card_text {
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 10px 0;
  font-size: 0.7rem;
  cursor: pointer;
}

.products .card_text:hover {
  color: yellow;
}

.products  img {
  cursor: pointer;
}

.fab-products {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}

.fab-title {
  padding-top: 20px;
}

/* @media (max-width: 800px) {
  .products {
    display: none;
  }
}

@media (max-height: 760px) {
  .products {
    display: none;
  }
} */
</style>