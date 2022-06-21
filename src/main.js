import './global.css';
import { defineCustomElement } from 'vue';

import { default as badgeButton } from './components/BadgeButton.ce.vue';
import { default as starRating } from './components/StarRating.ce.vue';

const BadgeButton = defineCustomElement(badgeButton);
const StarRating = defineCustomElement(starRating);

customElements.define('star-rating', StarRating);
customElements.define('badge-button', BadgeButton);