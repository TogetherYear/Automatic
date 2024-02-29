<script lang="ts" setup>
import { Application } from '../../Application';
import supportIcon from '@/assets/images/support.png'
import { inject } from 'vue';

const instance = inject('instance') as Application

const {
    menus,
    currentOption,
    isShow,
} = instance.sidebar.InitStates()
instance.sidebar.InitHooks()
instance.sidebar.Run()
</script>

<template>
    <div class="Sidebar" :style="{ transform: isShow ? 'scale(1.0)' : 'scale(0.0)', opacity: isShow ? '1.0' : '0.7' }">
        <n-tooltip placement="top" trigger="hover" v-for="m in menus" :key="m.title">
            <template #trigger>
                <span class="Menu" @click="instance.sidebar.OnSwitchOptions(m)">
                    <span class="Select" :style="{ opacity: currentOption == m.id ? '1.0' : '0.0' }"></span>
                    <img :src="m.icon" alt="">
                </span>
            </template>
            {{ m.title }}
        </n-tooltip>
        <span class="Support">
            <img :src="supportIcon" alt="">
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Sidebar.scss"
</style>