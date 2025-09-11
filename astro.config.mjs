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
					label: '5th Semester',
					items: [
						{ label: 'NanoPhysics', slug: '5th-sem/nanophysics' },
						{ label: 'Power Electronics II', slug: '5th-sem/power-electronics' },
						{ label: 'Power System Analysis', slug: '5th-sem/power-system-analysis' },
						{ label: 'Instrumentation', slug: '5th-sem/instrumentation' },
						{ label: 'High Voltage', slug: '5th-sem/high-voltage' },
						{ label: 'Communication Engg', slug: '5th-sem/communication-engg' },
						{ label: 'Numerical Techniques', slug: '5th-sem/numerical-techniques' },
					],
				},
				{
					label: '5th Semester Notes',
					autogenerate: { directory: '5th-sem' },
				},
			],
		}),
	],
});
