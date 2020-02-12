const currentDateUTC = new Date().toUTCString()

module.exports = {
	title: 'a11n.nl',
	dest: './public',
	themeConfig: {
		repo: 'https://www.linkedin.com/in/arietimmerman',
		repoLabel: 'LinkedIn',
		// editLinks: true,
		// editLinkText: 'Found a bug? Help me improve this page!',

		locales: {
			// The key is the path for the locale to be nested under.
			// As a special case, the default locale can use '/' as its path.
			'/': {
				lang: 'English', // this will be set as the lang attribute on <html>
				title: 'a11n.nl',
				description: 'Identity Services - SailPoint, Auth0, iWelcome',

				nav: [
					{ text: 'Home', link: '/' },
					{
						text: 'About', items: [
							{ text: 'About us', link: '/about/' },
							{ text: 'Blog', link: '/blog' }
						]
					},
					{
						text: 'Services', items: [
							{ text: 'Identity Solution Architecture', link: '/services/solution_architecture/' },
							{ text: 'Identity Solution Implementation', link: '/services/identity_solution_implementation/' },
							{ text: 'Rapid Identity Prototyping', link: '/services/rapid_identity_prototyping/' },
							{ text: 'API Gateway', link: '/services/api_gateway_implementation/' },


						]
					},

					{
						text: 'Products', items: [
							{ text: 'SailPoint', link: '/products/sailpoint/' },
							{ text: 'ForgeRock', link: '/products/forgerock/' },
							{ text: 'Auth0', link: '/products/auth0/' },
							{ text: 'iWelcome', link: '/products/iwelcome/' },
							{ text: 'MuleSoft', link: '/products/mulesoft/' },
							{ text: 'RSA IGL / Aveksa', link: '/products/rsa/' },

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
			description: 'Identity Services - SailPoint, Auth0, iWelcome'
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
