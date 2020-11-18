const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'a11n.nl',
	dest: './public',
	themeConfig: {
		repo: 'https://www.linkedin.com/in/arie',
		repoLabel: 'LinkedIn',
		// editLinks: true,
		// editLinkText: 'Found a bug? Help me improve this page!',

		locales: {
			// The key is the path for the locale to be nested under.
			// As a special case, the default locale can use '/' as its path.
			'/': {
				lang: 'English', // this will be set as the lang attribute on <html>
				title: 'a11n.nl',
				description: 'Independent Identity and Access Management advise. Gain insight. Provision access. Enforce controls. Empower users',

				nav: [
					{ text: 'Home', link: '/' },
					{
						text: 'About', link: '/about/'
					},
					{
						text: 'Services', items: [
							{ text: 'Architecture', link: '/services/solution_architecture/' },
							{ text: 'Implementation', link: '/services/identity_solution_implementation/' },
							{ text: 'API Gateway', link: '/services/api_gateway_implementation/' },
						]
					},

					{
						text: 'Vendors', items: [
							{ text: 'SailPoint', link: '/products/sailpoint/' },
							{ text: 'ForgeRock', link: '/products/forgerock/' },
							{ text: 'Auth0', link: '/products/auth0/' },
							{ text: 'iWelcome', link: '/products/iwelcome/' },
							{ text: 'MuleSoft', link: '/products/mulesoft/' },
							{ text: 'RSA IGL / Aveksa', link: '/products/rsa/' },
							{ text: 'List', link: '/products/list/' },

						]
					},

					{ text: 'Contact', link: '/contact/' },


				],
			}

		},


		logo: '/a11n-logo-plain-v2.svg',
		docsDir: 'src'
	},

	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'English', // this will be set as the lang attribute on <html>
			title: 'a11n.nl',
			description: 'Connect anything with confidence. We uniquely combines academic insights with a pragmatic approach.'
		}
	},


	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: 'UA-135020517-1' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://www.a11n.nl',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-janitor'
	],

	head: [
		[
			'link',
			{ rel: 'icon', sizes: '57x57', href: './a11n-logo-plain-v2.svg' }
		],

		['meta', { name: 'msapplication-TileColor', content: '#28c637' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/a11n-logo-plain-v2.svg' }
		],
		['meta', { name: 'theme-color', content: '#28c637' }]
	]
}
