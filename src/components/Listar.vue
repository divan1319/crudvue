<template>
    <div>
        <h2>Mostrando Elementos</h2>
        <div v-for="bus in buses" :key="bus.id_bus">
        <div>{{ bus.id_bus}} </div>
        <div> {{ bus.ruta_bus }} </div>

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