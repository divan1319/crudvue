<template>
<div class="uk-container uk-padding">
<div uk-filter="target: .js-filter">
    <div class="uk-inline">
    <button class="uk-button uk-button-default" type="button">Filtrar Resultados</button>
    <div uk-dropdown="pos: bottom-left">
        <ul class="uk-nav uk-dropdown-nav">
        <li class="uk-active" uk-filter-control><a href="#">Todas las rutas</a></li>
        <li class="uk-nav-divider"></li>
            <li class="uk-nav-header">Por Municipios</li>
            <li uk-filter-control="[data-color='white']"><a href="#">Blancos</a></li>
            <li class="uk-nav-divider"></li>
            <li class="uk-nav-header">Por Departamentos</li>
            <li uk-filter-control="[data-color='black']"><a href="#">Negro</a></li>
        </ul>
    </div>
</div>

    <ul class="js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="white">
            <div class="uk-card uk-card-default uk-card-body">Item</div>
        </li>
        <li data-color="blue">
            <div class="uk-card uk-card-primary uk-card-body">Item</div>
        </li>
        <li data-color="black">
            <div class="uk-card uk-card-secondary uk-card-body">Item</div>
        </li>
    </ul>

</div>
</div>
</template>

<script>
export default {
  name: 'MenuBar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
