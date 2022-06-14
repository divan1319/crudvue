<template>
    <div class="uk-container">
        <div class="uk-child-width-1-1" uk-grid>
            <span class="uk-text-lead uk-text-center"> RUTA DE BUSES Y MICROBUSES</span>
        </div>
        <div class="uk-grid-small uk-child-width-1-3@s uk-text-center" uk-grid
            uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 150">
            <div v-for="bus in buses" :key="bus.id_bus" >
                <div class="uk-card uk-card-default uk-card-body">
                
                    <h3 class="uk-card-title">
                        <div>{{ bus.id_bus }} </div>
                    </h3>
                    <p>{{ bus.ruta_bus }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListarItem',
    data() {
        return {
            buses: []
        }
    },
    created: function () {
        this.MostrarMapas();
    },
    methods: {
        MostrarMapas() {
            fetch('http://localhost/API/maps/c_bus.php')
                .then(respuesta => respuesta.json())
                .then((dataResponse) => {

                    this.buses = []
                    if (typeof dataResponse[0].success === 'undefined') {
                        this.buses = dataResponse;
                    }
                })
                .catch(console.log)
        }
    }

}


</script>