// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ohm Notes',
			social: [{ icon: 'github', label: 'GitHub', href: '' }],
			sidebar: [
				
				{
					label: '5th Semester Notes',
					autogenerate: { directory: '5th-sem' },
				},
				{
					label: '6th Semester Notes',
					autogenerate: { directory: '6th-sem' },
				},
			],
		}),
	],
});
