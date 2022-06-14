<template>
    <div class="uk-grid-small" uk-grid uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
     v-for="bus in buses" :key="bus.id_bus">
    <div class="uk-width-1-4@s">
        <div class="uk-card uk-card-default uk-card-body">
            <h3 class="uk-card-title"><div>{{ bus.id_bus}} </div></h3>
            <p>{{ bus.ruta_bus }}</p>
        </div>
    </div>
</div>
</template>

<script>
    export default{
        name: 'ListarItem',
    data(){
        return{
            buses:[]
        }
    },
    created:function(){
        this.MostrarMapas();
    },
    methods:{
        MostrarMapas(){
            fetch('http://localhost/API/maps/c_bus.php')
            .then(respuesta => respuesta.json())
            .then((dataResponse) => {
                
                this.buses= []
                if(typeof dataResponse[0].success === 'undefined'){
                    this.buses = dataResponse;
                }
            })
            .catch(console.log)
        }
    }

    }


</script>