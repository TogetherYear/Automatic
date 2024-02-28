<script lang="ts" setup>
import { Application } from '../../Application';
import { inject } from 'vue';
import logoIcon from '@/assets/images/logo.ico'

const instance = inject('instance') as Application

const {
    menus,
    currentOption,
} = instance.sidebar.InitStates()
instance.sidebar.InitHooks()
instance.sidebar.Run()
</script>

<template>
    <div class="Sidebar">
        <span class="Logo">
            <img :src="logoIcon" alt="">
        </span>
        <span class="Menu">
            <span class="Option" @click="instance.sidebar.OnSwitchOptions(m.id)" v-for="m in menus" :key="m.title">
                <span class="Select" v-show="currentOption == m.id"></span>
                <img :src="m.icon" :title="m.title" alt="">
            </span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Sidebar.scss"
</style>