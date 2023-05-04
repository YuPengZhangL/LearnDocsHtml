const settings = require('../settings.js')
const {
	/**
	 * API文档名列表
	 */
	 designMdArr,
	 dockerMdArr,
	 esMdArr,
	 etcdMdArr,
	 goMdArr,
	 kafkaMdArr,
	 k8sMdArr,
	 mongoMdArr,
	 mysqlMdArr,
	 networkMdArr,
	 nginxMdArr,
	 postgresqlMdArr,
	 redisMdArr,
	 zookeeperMdArr,
	 
} = settings
module.exports = {
	base: process.env.NODE_ENV === 'development' ? '/' : '/LearnDocsHtml/',
	title: 'YupengZ个人文档',
	description: '开源技术资料整理',
	themeConfig: {
		searchMaxSuggestions: 10,
		sidebarDepth: 8, // 将同时提取markdown中h2 标题，显示在侧边栏上。
		displayAllHeaders: true,
		archive: true,
		lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
		logo: '/logo.jpg',
		nav: [ 
			// 导航栏配置
			//{ text: 'API', link: '/es/' },
			//导航下拉配置
			{ 
				text: '目录', 
				items: [
				//{text: '设计模式', link: '/doc/designPatterns/'},
				{ text: 'Docker', link: '/doc/docker/' },
				{ text: 'ES', link: '/doc/es/' },
				{ text: 'Etcd', link: '/doc/etcd/' },
				//{ text: 'Golang', link: '/doc/go/' },
				{ text: 'Kafka', link: '/doc/kafka/' },
				{ text: 'Kubernetes', link: '/doc/kubernetes/' },
				{ text: 'mongodb', link: '/doc/mongodb/' },
				{ text: 'Mysql', link: '/doc/mysql/' },
				{ text: 'Network', link: '/doc/network/' },
				{ text: 'Nginx', link: '/doc/nginx/' },
				{ text: 'Postgresql', link: '/doc/postgresql/' },
				{ text: 'Redis', link: '/doc/redis/' },
				{ text: 'Zookeeper', link: '/doc/zookeeper/' },
				]
			 },
			 // 导航下拉分区配置
//			 {
//				 text: 'Languages',
//				 items: [
//					{text: 'Group1', items: [{text: 'Chinese', link: '/language/chinese/'}, {text: 'Japanese', link: '/language/japanese/'}]},
//					{text: 'Group2', items: [{text: 'Chinese', link: '/language/chinese/'}, {text: 'Japanese', link: '/language/japanese/'}]},
//				 ]
//			 },
		],
		sidebar: { // 侧边栏配置
			'/doc/designPatterns/': designMdArr,
			'/doc/docker/': dockerMdArr,
			'/doc/es/': esMdArr,
			'/doc/etcd/': etcdMdArr,
			'/doc/go/': goMdArr,
			'/doc/kafka/': kafkaMdArr,
			'/doc/kubernetes/': k8sMdArr,
			'/doc/mongodb/': mongoMdArr,
			'/doc/mysql/': mysqlMdArr,
			'/doc/network/': networkMdArr,
			'/doc/nginx/': nginxMdArr,
			'/doc/postgresql/': postgresqlMdArr,
			'/doc/redis/': redisMdArr,
			'/doc/zookeeper/': zookeeperMdArr,
		}
		
  },
	markdown: {
		lineNumbers: true, // 代码块显示行号
		extendMarkdown: md => {
		  //md.set({ breaks: true })
		  md.use(require("markdown-it-disable-url-encode"));
		}
	},
	plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}