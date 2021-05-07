import App from './App.svelte';
import config from './data/config.json';
import dataset from './data/2019.10.json';

const app = new App({
	target: document.body,
	props: {
	  config: config,
    dataset: dataset
	}
});

export default app;
