<template>
    <div>
        <span class="star-rating">
            <span :style="`width: ${starwidth}%`"></span>
        </span> ({{ ratingcount }})
    </div>
</template>

<script>
export default {
    Name: 'StarRating',
    props: {
        starwidth: String,
        ratingcount: String
    },
}
</script>

<style>
    .star-rating {
        position: relative;
        display: inline-block;
        width: 5rem;
        height: 1.5rem;
        vertical-align: bottom;
    }
    .star-rating:after, .star-rating:before {
        position: absolute;
    }
    .star-rating:before {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        width: 5rem;
        content: '';
        background-image: url("data:image/svg+xml;base64,IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIGZpbGw9J3JnYigyMzAsMjMwLDIzMCknPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTQuNTIgMTEuODk2Yy0uNjMzLjI4MS0xLjE5OS0uMTc5LTEuMDMzLS44NTVsLjU0OC0yLjIyNGEuNDQzLjQ0MyAwIDAwLS4xMDQtLjM0M2wtMS42MjItMS41MWMtLjQ5LS40NTUtLjMxMy0xLjE1Mi4zNC0xLjMxOGwyLjE2My0uNTQ5YS43NzQuNzc0IDAgMDAuMzg0LS4zMDVsMS4xMzUtMi4zMDZjLjI5OS0uNjA2IDEuMDMtLjYxOCAxLjMzNSAwTDguOCA0Ljc5MmEuNzkxLjc5MSAwIDAwLjM4NS4zMDVsMi4xNjIuNTVjLjY0Ny4xNjMuODM1Ljg1Ny4zNCAxLjMxOGwtMS42MjEgMS41MWEuNDc0LjQ3NCAwIDAwLS4xMDUuMzQybC41NDggMi4yMjRjLjE2OC42ODQtLjQwMiAxLjEzNi0xLjAzMy44NTVsLTIuMjE3LS45ODVhLjgyMi44MjIgMCAwMC0uNTIyIDBsLTIuMjE3Ljk4NXonLz48L3N2Zz4=");
        background-repeat: repeat-x;
        background-position: left 50%;
        background-size: 1rem;
    }
    .star-rating>span, .star-rating>span:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        display: block;
    }
    .star-rating>span:before {
        right: 0;
        content: '';
        background-repeat: repeat-x;
        background-position: left 50%;
        background-size: 1rem;
        background-image: url("data:image/svg+xml;base64,IDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTQnIGhlaWdodD0nMTQnIGZpbGw9J3JnYigyNTUsMjA1LDApJz48cGF0aCBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J000LjUyIDExLjg5NmMtLjYzMy4yODEtMS4xOTktLjE3OS0xLjAzMy0uODU1bC41NDgtMi4yMjRhLjQ0My40NDMgMCAwMC0uMTA0LS4zNDNsLTEuNjIyLTEuNTFjLS40OS0uNDU1LS4zMTMtMS4xNTIuMzQtMS4zMThsMi4xNjMtLjU0OWEuNzc0Ljc3NCAwIDAwLjM4NC0uMzA1bDEuMTM1LTIuMzA2Yy4yOTktLjYwNiAxLjAzLS42MTggMS4zMzUgMEw4LjggNC43OTJhLjc5MS43OTEgMCAwMC4zODUuMzA1bDIuMTYyLjU1Yy42NDcuMTYzLjgzNS44NTcuMzQgMS4zMThsLTEuNjIxIDEuNTFhLjQ3NC40NzQgMCAwMC0uMTA1LjM0MmwuNTQ4IDIuMjI0Yy4xNjguNjg0LS40MDIgMS4xMzYtMS4wMzMuODU1bC0yLjIxNy0uOTg1YS44MjIuODIyIDAgMDAtLjUyMiAwbC0yLjIxNy45ODV6Jy8+PC9zdmc+");
    }
</style>