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
				 { text: 'Java', link: '/java/' },
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
					collapsable:true,
					children:[
						/** [路径，标题]*/
						['/swtest/design-testcase1','基于用户登录场景设计测试用例'],
						['/swtest/design-testcase2','如何设计好的测试用例'],
						['/swtest/autotest','浅谈自动化测试'],
						['/swtest/test-coverage','测试覆盖率'],
						['/swtest/test-report','缺陷报告的组成'],
						['/swtest/test-app','app测试关注点'],
						['/swtest/test-api','接口测试'],
					]
				},
			],
			'/java/':[
				{
					title:'java',
					collapsable:true,
					children:[
						 ['/java/Syntax','java常见基础知识'],
					]
				},
			],
			'/gitlearn/':[
				{
					title:'git命令',
					collapsable:true,
					children:[
						['/gitlearn/problems','常操作的命令'],
						['/gitlearn/second','second'],
					]
				},
			],
			'/android/':[
				{
					title:'android',
					collapsable:true,
					children:[
						['/android/adbOperate','adb常用操作'],
						
					]
				},
			],
			'/mysql/':[
					{
					title:'mysql',
					collapsable:true,
					children:[
						['/mysql/operate','operate'],
					]
				},
			],
			'/about/':[
				{
					title:'About',
					collapsable:true,
					children:[]
				},
				
		    ],
			'/VMware/':[
				{
					title:'VMware虚拟机',
					collapsable:true,
					children:[
							['/VMware/VMwareUse','ubuntu虚拟机使用问题'],
						]
				},
				
		    ],
			'/':[
				{
					title:'home',
					collapsable:true,
					children:[
						
					]
				},
			],
		},
		
	}
	
}