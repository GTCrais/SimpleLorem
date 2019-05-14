
class ComponentManager
{
	static registerComponents()
	{
		let components = {};
		const files = require.context('../', true, /\.vue$/i);

		files.keys().map(function(key) {
			let componentName = key.split('/').pop().split('.')[0];
			components[componentName] = Vue.component(componentName, files(key).default);
		});

		return components;
	}
}

export default ComponentManager;