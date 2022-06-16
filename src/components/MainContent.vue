<template>

<div class="uk-section uk-section-secondary uk-light">
    <div class="uk-container uk-margin">
        <h3>Bustop</h3>
        <p class="uk-text-justify">Cansado siempre de preguntar: ¿Dónde pasa esta ruta? ¿Esta pasa por el centro? ¿Va directo?
        No te preocupes, aquí podrás encontrar la ruta que necesitas. Bustop ha recolectado la información
        de todas las rutas y sus recorridos a tu disposición.</p>
        <p></p><br>
    </div>
    <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s" uk-grid>
    <div class="uk-card-media-center uk-cover-container">
        <img src="../assets/images/b2.jpg" alt="" uk-cover>
        <canvas width="600" height="400"></canvas>
    </div>
    <div>
        <div class="uk-card-body uk-margin-remove">
        
            <h3 class="uk-card-title" id="title-section-1">Porque viajar en transporte publico ahora es más fácil</h3>
            <p>Bustop te ayuda a que encuentres tu ruta de transporte de una manera más fácil sin tanta vuelta.</p>
        </div>
    </div>
</div>

<div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s" uk-grid>
    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 6000" uk-cover>

    <ul class="uk-slideshow-items">
            <li>
            <img src="../assets/images/place1.jpg" alt="" >
        </li>
<li>
            <img src="../assets/images/place2.jpg" alt="" >
        </li>
        <li>
            <img src="../assets/images/place5.jpg" alt="" >
        </li>
        <li>
            <img src="../assets/images/place3.jpg" alt="" >
        </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
<canvas width="600" height="390"></canvas>
</div>
        
    </div>
    <div>
        <div class="uk-card-body">
            <h3 class="uk-card-title" id="title-section-1">Viaja por todo El Salvador</h3>
            <p>Puedes viajar a los lugares más emblematicos de El Salvador usando transporte público, con la ayuda de Bustop lo lograrás.</p>
        </div>
    </div>
</div>
</div>

</template>

<script>
export default {
  name: 'MenuBar',

}
</script>

