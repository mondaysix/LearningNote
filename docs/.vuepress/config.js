module.exports={
	title:'Meiky blog',
	description:'Meiky blog',
	themeConfig:{
		sidebarDepth:4,
		lastUpdated:'Last Updated',
		displayAllHeaders: true,
		/**
			顶部导航栏
		*/
		nav: [
		  { text: 'Home', link: '/' },
		  {text:'Catagory',items:[
				 { text: 'SoftwareTest', link: '/swtest/' },
				 { text: 'Java', link: '/java/'	},
				 { text: 'WebLearn', link: '/weblearn/'	},
				 { text: 'gitLearn', link: '/gitlearn/' },
				 { text: 'Android', link: '/android/' },
				 { text: 'MySQL', link: '/mysql/' },
				 { text: 'VMware', link: '/VMware/' },
			 ]
		   },
		  {text:'About',link:'/about/'}
		],
		/**
			侧边栏配置
		*/
		sidebar:{
			'/swtest/':[
				{
					title:'swtest',
					collapsable:false,
					children:[
						/** [路径，标题]*/
						['/swtest/design-testcase1','基于用户登录场景设计测试用例'],
						['/swtest/design-testcase2','如何设计好的测试用例'],
						['/swtest/autotest','浅谈自动化测试'],
						['/swtest/test-coverage','测试覆盖率'],
						['/swtest/test-report','缺陷报告的组成'],
						['/swtest/test-app','app测试关注点'],
						['/swtest/test-api','接口测试'],
						['/swtest/test-selenium','selenium工作原理'],
					]
				},
			],
			'/java/':[
				{
					title:'java',
					collapsable:false,
					children:[
						 ['/java/Syntax','java常见基础知识'],
						 ['/java/algorithm','算法题记录'],
						 ['/java/tool-tutorial','Eclipse+Selenium安装教程'],
					]
				},
			],
			'/weblearn/':[
				{
					title:'weblearn',
					collapsable:false,
					children:[
						 ['/weblearn/vuepress-learn','VuePress'],
						
					]
				},
			],
			'/gitlearn/':[
				{
					title:'git命令',
					collapsable:false,
					children:[
						['/gitlearn/problems','常操作的命令'],
						['/gitlearn/second','second'],
					]
				},
			],
			'/android/':[
				{
					title:'android',
					collapsable:false,
					children:[
						['/android/adbOperate','adb常用操作'],
						['/android/appBase','app基础知识'],
						['/android/asOperate','AS使用'],
						
					]
				},
			],
			'/mysql/':[
					{
					title:'mysql',
					collapsable:false,
					children:[
						['/mysql/operate','operate'],
					]
				},
			],
			'/about/':[
				{
					title:'About',
					collapsable:false,
					children:[]
				},
				
		    ],
			'/VMware/':[
				{
					title:'VMware虚拟机',
					collapsable:false,
					children:[
							['/VMware/VMwareUse','ubuntu虚拟机使用问题'],
						]
				},
				
		    ],
			'/':[
				{
					title:'home',
					collapsable:false,
					children:[
						
					]
				},
			],
		},
		
	}
	
}