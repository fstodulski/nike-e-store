import { writable } from 'svelte/store';

type CartStore = Array<any>;

const INITIAL: CartStore = [];
export const CartStore = writable<CartStore>(INITIAL);
