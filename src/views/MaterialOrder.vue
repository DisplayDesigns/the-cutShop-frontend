<template>
  <section class="layout">
    <form @submit.prevent="handleSubmit" class="form">
      <h1>Material Order: {{ materialType.name }}</h1>
      <div class="card">
        <div class="material-details">
          <img
            :src="require(`@/assets/${materialType.image}`)"
            :alt="materialType.name"
          />
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
          <label for="materialSizes"
            >Select the {{ materialType.type[types].name }} size</label
          >
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
          <label for="height">Choose the height</label>
          <input required type="number" v-model="height" />
        </div>

        <div v-if="size > -1" class="form_control">
          <label for="height">Choose the length</label>
          <input required type="number" v-model="length" />
        </div>

        <div v-if="size > -1" class="form_control">
          <label for="height">Number of peices</label>
          <input required type="number" v-model="peices" />
        </div>

        <div v-if="size > -1" class="form_control">
          <label for="area">Area </label>
          <div class="area">{{ area }} SqM</div>
        </div>

        <div v-if="size > -1" class="material_type">
          <p>
            {{ materialType.type[types].name }} {{ materialType.type[types].sizes[size].thickness }}mm {{ materialType.name }} <br/> 
            Area {{ area }}SqM {{ peices }} Cuts/Peices <br/> 
            Cost £{{calculateCost.toFixed(2)}}
          </p>
          
        </div>
      </div>
      <div v-if="size > -1" class="button_add-to-order">
        <button>Add To Order</button>
      </div>
      <div v-for="order in orders" :key="order" class="displayOrders">
        <p>{{order.materialType}} {{order.materialThickness}}mm {{order.material}}</p> 
        <p>{{order.materialArea}}SqM {{order.numberOfCuts}}cuts/pcs</p> 
        <p>£{{order.cost}}</p> 
        <p>{{order.id}}</p> 
      </div>
    </form>
  </section>
</template>

<script>
 import { uuid } from 'vue-uuid';

import data from "@/store.js";
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
      height: null,
      length: null,
      peices: null,
      orders: [],
    };
  },
  computed: {
    material() {
      return data.materials.find((material) => material.slug === this.slug);
    },
    materialType() {
      return this.material.types.find(
        (materialType) => materialType.slug === this.materialTypeSlug
      );
    },
    area() {
      if (this.length > 0 && this.height > 0) {
        let lengthInMeters = (this.length / 1000).toFixed(2);
        let heightInMeters = (this.height / 1000).toFixed(2);
        return lengthInMeters * heightInMeters;
      } else {
        return 0;
      }
    },
    price() {
      if(this.types > -1 && this.size > -1){
        return this.area * this.materialType.type[this.types].sizes[this.size].priceSqM;
      }else{
        return 0;
      }
    },
    pricePerCut() {
      if(this.types > -1 && this.size > -1){
        return this.materialType.type[this.types].sizes[this.size].costPerCut;
      }else{
        return 0;
      }
    },
    calculateOverTen() {
       if(this.peices > -1) {
          if (this.peices > 10) {
            return this.peices - 10;
          }
        return this.price;
       } else {
         return 0
    }
    },
    calculateCost() {
       if(this.peices > -1) {
          if (this.peices > 10) {
            let result = (this.calculateOverTen * this.pricePerCut) + this.price
            return result
          }
        return this.price;
       } else {
         return 0
    }
    },
  },
  methods: {
    handleSubmit() {
        let material = this.materialType.name
        let materialType = this.materialType.type[this.types].name
        let materialThickness = this.materialType.type[this.types].sizes[this.size].thickness
        let materialArea = this.area
        let numberOfCuts = this.peices
        let cost = this.calculateCost.toFixed(2)

        this.orders.push(
          {
            id: uuid.v1(),
            material,
            materialType,
            materialThickness,
            materialArea,
            numberOfCuts,
            cost
          }
        )
    },
  },
  
};
</script>

<style scoped>
img {
  max-width: 200px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.form_control {
  display: flex;
  flex-direction: space-between;
  padding: 2rem;
}
.layout {
  max-width: 1140px;
  margin: auto;
}
.area {
  padding-left: 20px;
  background-color: white;
}
</style>