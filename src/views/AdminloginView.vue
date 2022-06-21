<template>
    <div class="uk-container uk-margin">
        <div class="uk-child-width-1-1" uk-grid>
            <span class="uk-text-lead uk-text-center"> Iniciar Sesión</span>
        </div>
    <admin-form></admin-form>
    </div>
    
</template>
<script>
    import AdminForm from '@/modals/AdminloginForm'

    export default {
        name: 'AdminLogin',
        components:{
                AdminForm
            }
        }
</script>