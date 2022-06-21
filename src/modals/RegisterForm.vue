<template>
        <div id="formulario_registro"  uk-modal bg-close="false">
        <div class="uk-modal-dialog">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <div class="uk-modal-header">
                <h2 class="uk-modal-title">Registrarme</h2>
            </div>
            <div class="uk-modal-body">
            <form class="uk-grid-small" uk-grid>
                <div class="uk-width-1-1">
                <label for="txt-nickname" class="uk-label-form">Nombre de usuario</label>
                    <input class="uk-input" id="txt-nickname" type="text" placeholder="example123">
                </div>
                <div class="uk-width-1-1">
                <label for="txt-pass" class="uk-label-form">Contraseña</label>
                    <input class="uk-input" type="password" placeholder="********">
                </div>
                <div class="uk-width-1-1">
                    <label for="" class="uk-laber-form">Correo</label>
                    <input type="email" class="uk-input" placeholder="example@correo.com">
                </div>
                <div class="uk-width-1-1">
                ¿Ya estás registrado? Haz clic <a href="#formulario_login" uk-toggle>aquí</a> para iniciar sesión.
                </div>
            </form>
            </div>
            <div class="uk-modal-footer">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-expand">
                     <button class="uk-button uk-button-secondary uk-width-expand" type="submit">Registrarme</button>
                    </div>

                </div> 
            </div>
        </div>
    </div>
</template>