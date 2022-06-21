<template>
    <button class="action">
        <slot>No text provided</slot> <template v-if="badgeamount > 0">({{badgeamount}})</template>        
    </button>
</template>

<script>
export default {
   Name: 'BadgeButton',
    props: {
        badgeamount: {
            default: 0,
            type: Number
        }
    }
}
</script>

<style>
.action {
    color: #fff;
    background-color: #3f51b5;
    display: inline-block;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    line-height: 36px;
    padding: 0 16px;
    cursor: pointer;
    width: var(--button-width, none);
    height: var(--button-height, none);
}
</style>