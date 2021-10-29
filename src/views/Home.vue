<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>All Materials</h1>
        <div class="materials">
          <div v-for="material in materials" :key="material.name">
            <router-link
              :to="{
                name: 'materialsDetails',
                params: { slug: material.slug },
              }"
            >
              <h2>{{ material.name }}</h2>
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
    <div class="lorem">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel maiores pariatur repudiandae quas autem cupiditate facere alias debitis corporis ab nemo, laudantium repellat quod tempora expedita adipisci deserunt architecto esse maxime quo ut illum asperiores. Libero accusantium rem inventore sapiente explicabo placeat commodi provident sit esse voluptates. Magni minima suscipit fugiat qui accusamus illo neque quaerat autem voluptatem ex fugit voluptates vero veritatis nostrum recusandae minus, odit porro deleniti. Voluptatem repellendus beatae mollitia hic repudiandae atque voluptates, nobis possimus eveniet ex quisquam a vero saepe? Itaque sequi accusamus perspiciatis minima, explicabo non ipsam voluptate vel ab libero voluptatem sed magnam ut voluptatum magni temporibus enim praesentium quae aut! Iusto autem nisi facere, vero magni exercitationem esse ipsa corporis, dolores officia praesentium neque, cum accusantium excepturi placeat cumque sed eius quisquam dolorum quas fugit? Provident id repudiandae praesentium expedita fugiat itaque tenetur mollitia vero labore aut ullam corrupti, ipsum, tempora unde dolorem delectus incidunt debitis architecto! Id, aut eveniet reiciendis veritatis maiores suscipit eos commodi, consequuntur minus voluptates praesentium quibusdam exercitationem repellendus pariatur doloribus nobis harum illo asperiores non! Ea rem quis omnis esse, a accusantium suscipit praesentium cum eos placeat modi. Magni sequi facere maiores quis error earum dolore ducimus accusantium numquam nihil. Sapiente necessitatibus repellat tempora veritatis asperiores ab voluptatem, facere molestias temporibus error voluptatum officiis eos praesentium quo! Magnam vero eaque maiores facere, totam recusandae dolores incidunt dignissimos voluptate laborum, ipsam debitis repellat optio rem ea necessitatibus quia a obcaecati eos iure enim cumque impedit quasi tempora! Enim quibusdam culpa eius quod dicta fugiat at commodi deserunt quam! Dicta eaque, illo corrupti aperiam tempore ea obcaecati atque sequi debitis consectetur iure commodi accusamus accusantium necessitatibus! Impedit aliquam voluptatum eligendi reiciendis quod sapiente, voluptas aut et voluptatibus, laboriosam nobis officia fugit error distinctio harum obcaecati, expedita at dolorum. Neque, qui ea harum pariatur inventore perspiciatis temporibus, minus nulla dicta, nesciunt beatae delectus a commodi debitis culpa repudiandae quia aliquam enim molestias? Autem, hic impedit. Esse, id obcaecati impedit dignissimos a nihil error quisquam explicabo facere animi amet cum in odio. Quasi ad fuga corrupti ipsum inventore culpa sunt? Dolores perspiciatis ipsam optio quasi tempore ut velit magnam, repellat laboriosam voluptas enim modi voluptatibus reiciendis assumenda nostrum nemo quae dolorem, repellendus beatae odit eveniet similique officiis. Eaque, atque? Saepe, excepturi doloribus! Voluptatem at iure consequuntur in beatae, cupiditate quas, illo quis, ad aut molestias veniam accusamus iusto inventore dicta distinctio nostrum sint possimus eveniet ea. Debitis perferendis optio doloribus cum tempora id placeat qui quia cumque hic, dolores voluptatibus sunt eos omnis illo, voluptas eius veniam ratione, in ab vero voluptatum. Quidem aperiam voluptatibus sunt alias itaque perferendis necessitatibus nam repellat aliquam eos quia dignissimos sapiente dicta, asperiores quis accusamus fugit ea laboriosam voluptas doloribus animi tempore unde temporibus dolor. Voluptatibus dolore ratione aspernatur magnam nemo totam a, iste quisquam? Vero nisi, porro laudantium harum quis aspernatur deserunt quidem consequuntur quia laboriosam rem ratione incidunt corporis obcaecati! Veritatis libero, ducimus doloribus in labore exercitationem excepturi molestias dolores repudiandae at hic et? Cumque cupiditate cum eaque vel deserunt eum expedita a! Quaerat ratione nesciunt animi reprehenderit veniam. Eveniet architecto autem voluptate accusantium nulla laborum veritatis quisquam, ducimus omnis non placeat facilis nobis hic facere porro explicabo. Ad voluptate quo nobis non quasi eius vitae. Eius nostrum molestias modi vitae expedita placeat vero nulla blanditiis ducimus alias perferendis corrupti saepe sint, sapiente sunt dolor libero vel quas labore? Labore qui nostrum, dolores quasi tempora ullam quia soluta tenetur iure dolorem obcaecati quibusdam consectetur? Voluptatibus possimus iure accusantium. Veritatis perspiciatis et placeat nobis reprehenderit corrupti, alias necessitatibus culpa id doloremque officiis provident quam modi ipsam ut ipsa! Possimus tenetur libero, assumenda excepturi fugiat aspernatur sapiente accusantium eveniet, sed maiores harum corporis perferendis quos molestiae dolore eaque neque unde necessitatibus, laborum dolorum alias omnis aperiam laudantium id! Debitis placeat, suscipit culpa, dolores recusandae eos mollitia iste provident eveniet a corporis est velit dolore non illum eius quo. Eius id possimus maiores ipsa accusamus quam exercitationem quia, temporibus voluptate suscipit dolorem ea. Inventore blanditiis nobis sed laborum error. Amet omnis nesciunt sapiente repudiandae nam repellendus dolores eum incidunt enim ipsam aliquid in debitis asperiores blanditiis recusandae nihil beatae, praesentium, repellat corporis laudantium hic, assumenda necessitatibus. Mollitia ratione facilis voluptatum itaque iste incidunt ipsum dolorem. Magni dignissimos ea quisquam eum ex! Odio harum iure vitae assumenda, alias iste, perspiciatis, exercitationem sunt neque iusto mollitia et rerum eveniet? Consequuntur magni iure voluptas cumque fuga inventore, voluptatem aperiam saepe, cum doloribus quia a. Eius error consequuntur magni dolorum sit accusantium harum deserunt ullam, architecto itaque iusto nemo maxime facere rerum aut corrupti repellendus debitis ad inventore ratione, consectetur nulla. Dolorum iste expedita vero illum nulla minima, quod qui culpa praesentium in dolor laboriosam ex reprehenderit quae laborum sunt minus amet quis commodi tempora iure? Consequatur facilis velit minus debitis architecto! Beatae, sit. Autem repudiandae, at, exercitationem in maxime aperiam eligendi, odit doloremque itaque debitis excepturi vero incidunt qui inventore dolor deleniti nemo! Magni, asperiores natus. Iusto numquam odio consectetur odit eos accusamus impedit commodi minima perspiciatis, ut rem nulla esse tempora velit dignissimos eum. Nulla voluptates quaerat quae provident consectetur sit id ut aperiam deserunt ex quos vel autem cumque sunt quas iusto, inventore qui doloribus corporis natus asperiores? Ab natus tempore voluptas fuga quis minus deserunt eum sequi provident dicta molestiae quibusdam porro suscipit magni explicabo omnis illo rem est maxime impedit odio, nam earum. Possimus est necessitatibus rem fuga numquam eaque ratione omnis, nesciunt temporibus tenetur? Ipsa perferendis officiis libero rerum aut, perspiciatis odit veniam ullam dolorum ipsum iure necessitatibus doloremque voluptate cumque? Cumque cupiditate ad modi porro ipsam, ea ex provident ipsum illum mollitia, deserunt reprehenderit sequi laboriosam. Nihil ratione cupiditate ipsam reprehenderit quisquam tenetur vitae, corrupti in provident aperiam, quibusdam animi. Reprehenderit, iure adipisci perspiciatis voluptatum similique voluptatem sunt id reiciendis placeat, ex velit, numquam culpa. Corporis quas dolores cupiditate delectus! Voluptatem, magni! Corporis deleniti vero omnis eligendi, impedit voluptates officia, ad maiores molestiae necessitatibus sed placeat. Officia, reiciendis esse ea doloribus laborum provident.
        </div>
  </div>
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.05)),
    url("../assets/cnc3.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;
}

/* .home {
  max-width: 1400px;
  margin: 0 auto;
} */

.materials {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

a {
  color: lightseagreen;
  text-decoration: none;
}

a:hover,
a:visited {
  text-decoration: underline;
}

.container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

/* @media only screen and (max-width: 1140px) {
  .materials {
    flex-direction: column;
  }
} */
</style>
