<script lang="ts" setup>
import { Application } from '../../Application';
import { inject } from 'vue';
import logoIcon from '@/assets/images/logo.ico'

const instance = inject('instance') as Application

const {

} = instance.sidebar.InitStates()
instance.sidebar.InitHooks()
instance.sidebar.Run()
</script>

<template>
    <div class="Sidebar">
        <span class="Logo">
            <img :src="logoIcon" alt="">
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Sidebar.scss"
</style>