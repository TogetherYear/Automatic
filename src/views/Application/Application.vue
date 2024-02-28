<script lang="ts" setup>
import { provide } from 'vue';
import { Application } from './Application';
import HeaderBarVue from '@/common/HeaderBar/HeaderBar.vue';
import SidebarVue from './Components/Sidebar/Sidebar.vue';
import { App } from '@/App';

const instance = new Application()

provide('instance', instance)

const {
    isMax,
} = App.Instance.InitStates()

const {

} = instance.InitStates()

instance.InitHooks()

instance.Run()
</script>

<template>
    <div class="DefaultWindow Application">
        <HeaderBarVue :type="'main'"></HeaderBarVue>
        <SidebarVue></SidebarVue>
    </div>
</template>

<style lang="scss" scoped>
@import "./Application.scss";
</style>
