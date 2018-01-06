<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <Header></Header>
            </div>
        </div>
        <hr>
        <div class="row">
            <servers></servers>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <app-footer></app-footer>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Servers from './Servers.vue';
import AppFooter from './AppFooter.vue';

export default {
    components: {
        Header,
        Servers,
        AppFooter,
    }
}
</script>

<style>

</style>
