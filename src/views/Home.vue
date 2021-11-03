<template>
  <section class="hero">
    <div class="home_container">
      <div class="home_information-card">
        <p>
          The one stop shop for all your material cutting needs. Most common
          materials available to order online. If you can't see your required
          material, send us an enquiry and we will do our best to supply it.
          Partial or full fabrication of almost any product is available
        </p>
      </div>

      <div class="home_materials-container">
        <div
          v-for="material in materials"
          :key="material.name"
          class="material"
        >
          <router-link
            :to="{
              name: 'materialsDetails',
              params: { slug: material.slug },
            }"
          >
            <h2 class="material-name">{{ material.name }}</h2>
          </router-link>
          <figure>
            <router-link
              :to="{
                name: 'materialsDetails',
                params: { slug: material.slug },
              }"
            >
              <img
                :src="require(`@/assets/${material.image}`)"
                :alt="material.name"
              />
            </router-link>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import data from "../data";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      materials: data.materials,
    };
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  background-image: url("../assets/cnc3-edit.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home_container {
  padding-top: 200px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}

.home_information-card {
  max-width: 600px;
  margin: 0 auto;
  color: black;
}

.home_information-card p {
  font-size: 1.25rem;
  font-weight: 700;
}

.material {
  margin: 20px;
}

.home_materials-container {
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  height: 60vh;
  max-width: 1140px;
  margin: 20px auto;
  flex-wrap: wrap;

}

.material-name {
  background-color: black;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 20px 0;
}

.home_materials-container img {
  height: 150px;
  width: 150px;
  border-radius: 5px;
  border: 1px solid black;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: yellow;
}


/* 
@media only screen and (max-width: 1140px) {
  .home_container {
    margin: 0 auto;
  }
} */
</style>
