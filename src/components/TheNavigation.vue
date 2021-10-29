<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav id="nav">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/logo2.jpg" alt="">
        </router-link>
      </div>
      <ul v-show="!mobile" class="nav-links">
        <li class="links">
          <router-link to="/"> Home </router-link>
        </li>
        <li v-for="material in materials" :key="material.name" class="links">
          <router-link
            :to="{
              name: 'materialsDetails',
              params: { slug: material.slug },
            }"
          >
            {{ material.name }}
          </router-link>
        </li>
        <li class="links">
          <router-link to="/cart"> Cart </router-link>
        </li>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="far fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li class="links">
            <router-link to="/"> Home </router-link>
          </li>
          <li v-for="material in materials" :key="material.name" class="links">
            <router-link
              :to="{
                name: 'materialsDetails',
                params: { slug: material.slug },
              }"
            >
              {{ material.name }}
            </router-link>
          </li>
          <li class="links">
            <router-link to="/cart"> Cart </router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
import data from "../data";
export default {
  name: "TheNavigation",
  data() {
    return {
      materials: data.materials,
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen)
    this.checkScreen()
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    updateScroll() {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        this.scrolledNav = true
        return
      }
      this.scrolledNav = false
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.moblie = false
      this.mobileNav = false
      return
    }
  }
};
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: white;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: .5s ease all;
  width: 95%;
  margin: 0 auto;
}

nav ul, a {
  font-weight: bold;
  color: white;
  list-style: none;
  text-decoration: none;
}

nav li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

.links {
  font-size: 14px;
  transition: .5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}

.links:hover {
  color: yellow;
  border-color: yellow;
  transition: .5s ease all;
}

a:hover {
  color: yellow;
  transition: .5s ease all;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  border-radius: 5px;
  transition: .5s ease all;
}

.nav-links {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}

.icon i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  border-right: 2px solid black;
}

.dropdown-nav li {
  margin-left: 0;
}

.dropdown-nav li a {
  color: black;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateY(0);
}

.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav nav {
  padding: 8px 0;
}

.scrolled-nav nav .logo img {
  width: 40px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@media (min-width: 1140px) {
  .nav {
    max-width: 1140px;
  }
}

/* #nav {
  display: flex;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}

#nav a.cut-shop-active-class {
  color: purple;
}

.nav-links {
  display: flex;
}

.links {
  padding-right: 20px;
  list-style: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
} */
</style>