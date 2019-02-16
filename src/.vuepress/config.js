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
				{ text: 'About', items: [
					{ text: 'About us', link: '/about/' },
					{ text: 'Blog', link: '/blog' }
				] }, 
				{ text: 'Services', items: [
					{ text: 'Identity Solution Architecture', link: '/services/solution_architecture/' },
					{ text: 'Identity Innovation', link: '/services/solution_architecture/' },
					
				] }, 

				{ text: 'Products', items: [
					{ text: 'SailPoint IdentityIQ', link: '/products/sailpoint/' },
					{ text: 'ForgeRock', link: '/products/forgerock/' },
					{ text: 'Auth0', link: '/products/auth0/' },
					{ text: 'iWelcome', link: '/products/iwelcome/' }
				]},

				
			],
			},
			'/nl/': {
			  lang: 'Nederlands',
			  title: 'a11n.nl',
			  description: 'Identiteits',

			  nav: [
				{ text: 'Home', link: '/' }, 
				{ text: 'Blog (Engels)', link: '/blog' }
			],

			}
		  },

		
		logo: '/a11n-logo-plain.svg',
		docsDir: 'src'
	},

	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
		  lang: 'English', // this will be set as the lang attribute on <html>
		  title: 'a11n.nl',
		  description: 'Identity Services - SailPoint, Auth0, iWelcome'
		},
		'/nl/': {
		  lang: 'Nederlands',
		  title: 'a11n.nl',
		  description: 'Identiteits'
		}
	  },
	
	
	plugins: [
		[
			'@vuepress/google-analytics',
			{
				ga: '' // UA-00000000-0
			}
		],
		[
			'vuepress-plugin-rss',
			{
				base_url: '/',
				site_url: 'https://vuepressblog.org',
				filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
				count: 20
			}
		],
		'vuepress-plugin-janitor'
	],
	head: [
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' }
		],
		[
			'link',
			{ rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' }
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '114x114',
				href: '/apple-icon-114x114.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '120x120',
				href: '/apple-icon-120x120.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '144x144',
				href: '/apple-icon-144x144.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '152x152',
				href: '/apple-icon-152x152.png'
			}
		],
		[
			'link',
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-icon-180x180.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '192x192',
				href: '/android-icon-192x192.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				href: '/favicon-96x96.png'
			}
		],
		[
			'link',
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png'
			}
		],
		['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
		[
			'meta',
			{ name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }
		],
		['meta', { name: 'theme-color', content: '#ffffff' }]
	]
}
