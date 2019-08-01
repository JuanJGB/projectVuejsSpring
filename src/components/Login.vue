<template>
    <!--    <h1>{{name}}</h1>-->
    <form v-on:submit="login" id="formlogin">
        <div class="form-group">
            <label for="usuario">Usuário
                <input type="text" required="required" class="form-control" id="usuario" name="usuario" v-model="usuario"
                       placeholder="Usuario">
            </label>
        </div>
        <div class="form-group">
            <label for="senha">Senha
                <input type="password" required="required" class="form-control" id="senha" v-model="senha" placeholder="Senha">
            </label>
        </div>
        <button type="submit" class="btn btn-primary">Logar</button>
    </form>

</template>

<script>
    export default {
        name: "Login",


        methods: {
            login() {
                var data = {
                    usuario: this.usuario,
                    senha: this.senha
                };

            }
        }
    }

</script>

<style scoped>

</style>