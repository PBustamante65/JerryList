// import adapter from '@sveltejs/adapter-auto';
// import preprocessor from 'svelte-preprocess';
//
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	preprocess: preprocessor(),
// 	kit: {
// 		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
// 		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
// 		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
// 		adapter: adapter()
// 	}
// };
//
// export default config;
//
//// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import preprocessor from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
	kit: {
		adapter: adapter()
	}
};
export default config;
