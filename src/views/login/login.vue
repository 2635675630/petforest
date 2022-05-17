<template>
    <div class="login">
        <login-input></login-input>
    </div>
</template>

<script>
import LoginInput from "views/login/loginchild/LoginInput.vue"
export default {
    components:{
        LoginInput
    }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css');
:root {
    --white: #e9e9e9;
    --gray: #333;
    --blue: #0367a6;
    --lightblue: #008997;
    --button-radius: 0.7rem;
    --max-width: 758px;
    --max-height: 620px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.login {
    align-items: center;
    background-color: var(--white);
    background: url("assets/img/reigster_bk.jpeg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    height: 100vh;
    place-items: center;
}
</style>>
