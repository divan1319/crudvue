<template>
  <div class="uk-container">
    <div class="uk-child-width-1-1" uk-grid>
      <span class="uk-text-lead uk-text-center">
        RUTA DE BUSES Y MICROBUSES</span
      >
    </div>
    <div class="uk-alert-danger" v-if="errorMessage" uk-alert="duration: 500">
      <a class="uk-alert-close" uk-close></a>
      <p>{{ errorMessage }}</p>
    </div>

    <div uk-filter="target: .js-filter">
      <div class="uk-grid-small uk-grid-divider uk-child-width-auto" uk-grid>
        <div>
          <ul class="uk-subnav uk-subnav-pill" uk-margin>
            <li class="uk-active" uk-filter-control><a href="#">All</a></li>
          </ul>
        </div>
        <div>
          <ul class="uk-subnav uk-subnav-pill" uk-margin>
            <li
              uk-filter-control="filter: [data-color='San Marcos']; group: data-color"
            >
              <a href="#">White</a>
            </li>
            <li
              uk-filter-control="filter: [data-color='blue']; group: data-color"
            >
              <a href="#">Blue</a>
            </li>
            <li
              uk-filter-control="filter: [data-color='black']; group: data-color"
            >
              <a href="#">Black</a>
            </li>
          </ul>
        </div>
        <div>
          <ul class="uk-subnav uk-subnav-pill" uk-margin>
            <li uk-filter-control="filter: [data-size='small']; group: size">
              <a href="#">Small</a>
            </li>
            <li uk-filter-control="filter: [data-size='medium']; group: size">
              <a href="#">Medium</a>
            </li>
            <li uk-filter-control="filter: [data-size='large']; group: size">
              <a href="#">Large</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="uk-child-width-1-1">
        <select class="uk-select" uk-margin>
        <option value="">Seleccione</option>
          <option><ul>
          <li uk-filter-control="filter: [data-color='San Marcos']; group: data-color"><a href="#">San </a></li>
          </ul> </option>
          <option>Option 02</option>
        </select>
      </div>
      <br />
      <ul
        class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center"
        uk-grid="masonry: true"
      >
        <li v-for="bus in buses" :key="bus.id_bus" :data-color="bus.municipio">
          <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title">
              <div>{{ bus.ruta }}</div>
            </h3>
            <p>{{ bus.municipio }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListarItem",
  data() {
    return {
      buses: [],
      errorMessage: "",
    };
  },
  created: function () {
    this.MostrarMapas();
  },
  methods: {
    MostrarMapas() {
      fetch("http://localhost/API/maps/controllers/c_bus.php")
        .then((respuesta) => respuesta.json())
        .then((dataResponse) => {
          console.log(dataResponse);
          this.buses = [];
          if (typeof dataResponse[0].success === "undefined") {
            this.buses = dataResponse;
          }
        })
        .catch((error) => {
          this.errorMessage = error;
        });
    },
  },
};
</script>