<template>
    <q-layout view="hHh LpR fff" >
        <q-header height-hint="150px" reveal elevated class="bg-primary text-white" >
            <div class="row">
                <div class="col-3">
                    <q-toolbar>
                        <q-toolbar-title class="text-center">
                            Adopt
                            <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="20" height="20" />n Animal
                        </q-toolbar-title>
                    </q-toolbar>
                </div>
                <div class="col-6">
                    <q-tabs align="center">
                        <q-route-tab to="/page1" label="Page One" />
                        <q-route-tab to="/page2" label="Page Two" />
                        <q-route-tab to="/page3" label="Page Three" />
                        <q-route-tab to="/page4" label="Page Four" />
                    </q-tabs>
                </div>
                <div class="col-3">
                    <q-toolbar>
                        <q-toolbar-title class="text-center">
                            <q-btn flat round dense icon="person" />
                            <q-btn flat round dense icon="favorite" />
                        </q-toolbar-title>
                    </q-toolbar>
                </div>
            </div>

        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer class="bg-grey-5 text-white">

            <div class="row">
                <div class="col-3">
                </div>
                <div class="col-6">
                    <q-toolbar>
                        <q-toolbar-title class="text-center">
                            <div>@Adopt Animal 2022</div>
                        </q-toolbar-title>
                    </q-toolbar>
                </div>
                <div class="col-3">
                    <q-toolbar>
                        <q-toolbar-title class="text-center">
                            <q-btn flat round dense icon="call" />
                            <q-btn flat round dense icon="shopping_cart" />
                            <q-btn flat round dense icon="email" />
                            <q-btn flat round dense icon="home" />
                        </q-toolbar-title>
                    </q-toolbar>
                </div>
            </div>
        </q-footer>

    </q-layout>
</template>
<style>
</style>