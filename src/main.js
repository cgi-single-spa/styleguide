import './global.css';
import { defineCustomElement } from 'vue';

import { default as HelloWorld } from './components/HelloWorld.ce.vue';


const HelloWorldCE = defineCustomElement(HelloWorld);

export function register() {
  customElements.define('hello-world', HelloWorldCE);
}