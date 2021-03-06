<template>
  <section class="layout">
    <form @submit.prevent="handleSubmit" class="form">
      <h1 class="material-name">Material Order: {{ materialType.name }}</h1>
      <div class="card">
        <div class="material-details">
          <ol>
            <li>Select material + thickness</li>
            <li>
              Input length + width of nested parts leaving minimum 15mm between
              parts
            </li>
            <li>Input total no of parts to be cut</li>
            <li>
              Upload a vector file or provide a JPG sketch of your requirements
            </li>
            <li>
              Add as many orders as you like before you go to the shopping cart
              and pay
            </li>
          </ol>
        </div>

        <div class="form_control">
          <label for="material"
            >Select the type of {{ materialType.name }}</label
          >
          <select name="material" v-model="types">
            <option :value="-1">Please Select</option>
            <option
              v-for="(materialTypeObject, index) in materialType.type"
              :value="index"
              :key="index"
              class="types"
            >
              {{ materialTypeObject.name }}
            </option>
          </select>
        </div>

        <div v-if="types > -1" class="form_control">
          <label for="materialSizes">Select the thickness</label>
          <select name="materialSizes" v-model="size">
            <option :value="-1">Please Select</option>
            <option
              v-for="(materialTypeObject, index) in materialType.type[types]
                .sizes"
              :key="index"
              :value="index"
              class="sizes"
            >
              {{ materialTypeObject.thickness }}mm
            </option>
          </select>
        </div>

        <div v-if="size > -1" class="form_control">
          <label
            class="input-insturction"
            data-tooltip="input-insturction"
            for="width"
            >Input width of nested area in mm</label
          >
          <input required type="number" v-model="width" />
        </div>

        <div v-if="size > -1" class="form_control">
          <label
            class="input-insturction"
            data-tooltip="input-insturction"
            for="width"
            >Input length of nested area in mm</label
          >
          <input required type="number" v-model="length" />
        </div>

        <div v-if="size > -1" class="form_control">
          <label
            class="input-insturction"
            data-tooltip="input-insturction"
            for="width"
            >Number of elements in nested area</label
          >
          <input required type="number" v-model="peices" />
        </div>

        <div v-if="size > -1" class="form_control">
          <label for="width">Upload a Multiple Files</label>
          <input
            class="choose-file-button"
            type="file"
            ref="files"
            multiple
            @change="handleFilesUpload()"
          />
          <div class="remove-file-button">
            <div v-for="(file, key) in files" :key="key" class="file-listing">
              {{ file.name }}
              <span class="remove-file" @click="removeFile(key)">Remove</span>
            </div>
          </div>
          <div class="upload-file-button">
            <button @click="addFiles()">Add Files</button>
          </div>
        </div>

        <div v-if="size > -1" class="material_type">
          <p class="order-summary-title">Order Summary</p>
          <p class="order-summary-text">
            {{ materialType.type[types].sizes[size].thickness }}mm
            {{ materialType.type[types].name }}
            {{ materialType.name }} <br />
            Area {{ area }}SqM {{ peices }} Peices <br />
            Cost £{{ calculateCost.toFixed(2) }}
          </p>
        </div>
      </div>
      <div v-if="size > -1" class="button_add-to-order">
        <button>Add To Order</button>
      </div>
    </form>
  </section>
</template>

<script>
import { uuid } from "vue-uuid";
import { mapGetters } from "vuex";

import data from "../data";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    materialTypeSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      types: -1,
      size: -1,
      width: null,
      length: null,
      peices: null,
      files: [],
    };
  },
  computed: {
    ...mapGetters(["cart"]),
    material() {
      return data.materials.find((material) => material.slug === this.slug);
    },
    materialType() {
      return this.material.types.find(
        (materialType) => materialType.slug === this.materialTypeSlug
      );
    },
    area() {
      if (this.length > 0 && this.width > 0) {
        let lengthInMeters = (this.length / 1000).toFixed(2);
        let widthInMeters = (this.width / 1000).toFixed(2);
        return lengthInMeters * widthInMeters;
      } else {
        return 0;
      }
    },
    price() {
      if (this.types > -1 && this.size > -1) {
        return (
          this.area *
          this.materialType.type[this.types].sizes[this.size].priceSqM
        );
      } else {
        return 0;
      }
    },
    pricePerCut() {
      if (this.types > -1 && this.size > -1) {
        return this.materialType.type[this.types].sizes[this.size].costPerCut;
      } else {
        return 0;
      }
    },
    calculateOverTen() {
      if (this.peices > -1) {
        if (this.peices > 10) {
          return this.peices - 10;
        }
        return this.price;
      } else {
        return 0;
      }
    },
    calculateCost() {
      if (this.peices > -1) {
        if (this.peices > 10) {
          let result = this.calculateOverTen * this.pricePerCut + this.price;
          return result;
        }
        return this.price;
      } else {
        return 0;
      }
    },
  },
  methods: {
    handleSubmit() {
      let newOrder = {
        id: uuid.v1(),
        material: this.materialType.name,
        materialType: this.materialType.type[this.types].name,
        materialThickness:
          this.materialType.type[this.types].sizes[this.size].thickness,
        materialArea: this.area,
        numberOfCuts: this.peices,
        cost: this.calculateCost.toFixed(2),
      };

      this.$store.dispatch("addOrder", newOrder);
      alert("your order has been placed");
    },
    addFiles() {
      this.$refs.files.click();
    },
    submitFiles() {
      let formData = new formData();

      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];

        formData.append("files[" + i + "]", file);

        const axios = require("axios");
        axios
          .post("/select-files", formData, {
            headers: {
              "Content-Type": "muiltpart/form-data",
            },
          })
          .then(function () {
            console.log("SUCCESS");
          })
          .catch(function () {
            console.log("FAILURE");
          });
      }
    },
    handleFilesUpload() {
      let uploadedFiles = this.$refs.target.files.files;

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
      }
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
  },
};
</script>

<style scoped>
.layout {
  padding-top: 90px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  background-image: url("../assets/cnc3-edit.png");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  overflow-y: auto;
  color: black;
}

.material-name {
  background-color: black;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 20px auto;
  width: fit-content;
}

.material-details {
  text-align: left;
  padding: 0 50px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  margin: 0 auto;
  max-width: 1140px;
  padding: 20px 0;
  border-radius: 5px;
  background-color: grey;
  display: flex;
  flex-direction: column;
  /* position: relative; */
}

.button_add-to-order button {
  margin-top: 15px;
  padding: 5px 10px;
  font-size: inherit;
  font-weight: 700;
  border-radius: 5px;
  outline: none;
}

img {
  max-width: 200px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.form_control {
  display: flex;
  width: 70%;
  padding-top: 1rem;
  justify-content: space-between;
  text-align: left;
}

.form_control label {
  padding-right: 15px;
  width: 80%;
  font-weight: 700;
  padding-bottom: 5px;
}

.form_control input {
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: inherit;
  font-style: inherit;
  outline: none;
  border: none;
}
.form_control option {
  cursor: pointer;
}
.form_control select {
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: inherit;
  font-style: inherit;
  outline: none;
  border: none;
  cursor: pointer;
}

.input-insturction {
  position: relative;
}

.input-insturction::before,
.input-insturction::after {
  --scale: 0;
  --tooltip-color: #333;
  --arrow-size: 10px;

  position: absolute;
  top: -0.25rem;
  left: 90%;
  transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
  transition: 50ms transform;
  transform-origin: bottom center;
}

.input-insturction::before {
  --translate-y: calc(-100% - var(--arrow-size));

  content: '';
  color: white;
  background: url("../assets/Untitled.png") var(--tooltip-color);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: .5rem;
  border-radius: .3rem;
  text-align: center;
  width: 600px;
  height: 300px;
  position: block;
}

.input-insturction:hover::before,
.input-insturction:hover::after {
  --scale: 1;
}

/* .input-insturction::after {
  --translate-y: calc(-1 * var(--arrow-size));

  content: '';
  border: var(--arrow-size) solid transparent;
  border-top-color: var(--tooltip-color);
  transform-origin: top center;
} */

.material_type {
  background-color: white;
  border-radius: 5px;
  padding: 5px 10px;
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  text-align: left;
}
.area {
  padding-left: 20px;
  background-color: white;
  border-radius: 5px;
}

.order-summary-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: rgb(95, 95, 95);
  text-decoration: underline;
  margin-bottom: 10px;
}

.upload-file-button button {
  margin-top: 5px;
  padding: 5px 10px;
  font-size: inherit;
  border-radius: 5px;
  font-weight: 700;
}

.choose-file-button {
  padding: 5px 10px;
}

.file-listing {
  width: 200px;
}

.remove-file {
  color: red;
  cursor: pointer;
  float: right;
}

@media (max-width: 400px) {
  .layout {
    padding-top: 70px;
    padding-left: 0;
    padding-right: 0;
    height: 100vh;
    overflow-y: auto;
    background-image: none;
    background-color: gray;
  }

  .form {
    margin: 0;
    height: 100vh;
  }

  .form_control {
    display: flex;
    flex-direction: column;
  }

  .area {
    padding: 5px 10px;
    background-color: white;
    border-radius: 5px;
  }

  input[type="file"] {
    position: absolute;
    top: -500px;
  }

  /* .material-name {
    margin-left: 10px;
    margin-right: 10px;
  } */

  .material-details {
    display: none;
  }
}
</style>