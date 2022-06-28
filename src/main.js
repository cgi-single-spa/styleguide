import './global.css';
import { defineCustomElement } from 'vue';

import { default as badgeButton } from './components/BadgeButton.ce.vue';
import { default as starRating } from './components/StarRating.ce.vue';
import { default as loadingSpinner } from './components/LoadingSpinner.ce.vue';

const BadgeButton = defineCustomElement(badgeButton);
const StarRating = defineCustomElement(starRating);
const LoadingSpinner = defineCustomElement(loadingSpinner);

customElements.define('star-rating', StarRating);
customElements.define('badge-button', BadgeButton);
customElements.define('loading-spinner', LoadingSpinner);