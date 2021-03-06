﻿module.exports={
	title:'Meiky blog',
	description:'Meiky blog',
	themeConfig:{
		sidebarDepth:2,
		lastUpdated:'最后更新时间',
		displayAllHeaders: true,
		sidebar:'auto',
		/**
			顶部导航栏
		*/
		nav: [
		  { text: 'Home', link: '/' },
		  {text:'Catagory',items:[
				 { text: 'SoftwareTest', link: '/swtest/' },
				 { text: 'Language', link: '/Language/'	},
				 { text: 'WebLearn', link: '/weblearn/'	},
				 { text: 'VersionControl', link: '/VersionControl/' },
				 { text: 'Android', link: '/android/' },
				 { text: 'MySQL', link: '/mysql/' },
				 { text: 'Others', link: '/Others/' },
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
						['/swtest/test-gui','GUI测试'],
						['/swtest/test-selenium','selenium工作原理'],
						['/swtest/test-code','浅谈代码级测试'],
						['/swtest/test-performance','浅谈性能测试'],
						['/swtest/test-search','测试主题'],
					]
				},
				{
					title:'测试辅助工具',
					collapsable:true,
					children:[
						/** [路径，标题]*/
						['/swtest/testTools/sonarqube','sonarqube'],
					]
				},
			],
			'/Language/':[
				{
					title:'java',
					collapsable:true,
					children:[
						 ['/Language/java/Syntax','java常见基础知识'],
						 ['/Language/java/algorithm','算法题记录'],
						 ['/Language/java/tool-tutorial','Eclipse+Selenium安装教程'],
						 ['/Language/java/spring','spring学习'],
					]
				},
				{
					title:'python',
					collapsable:true,
					children:[
						 ['/Language/python/Syntax','python学习记录'],
					
					]
				},
			],
			'/weblearn/':[
				{
					title:'weblearn',
					collapsable:true,
					children:[
						 ['/weblearn/vuepress-learn','VuePress'],
						
					]
				},
			],
			'/VersionControl/':[
				{
					title:'git常用操作',
					collapsable:true,
					children:[
						['/VersionControl/gitlearn/problems','常操作的命令'],
					
					]
				},
				{
					title:'svn常用操作',
					collapsable:true,
					children:[
						['/VersionControl/svnlearn/problems','常操作的命令'],
						
					]
				},
			],
			'/android/':[
				{
					title:'android',
					collapsable:true,
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
			'/Others/':[
				{
					title:'OtherProblems',
					collapsable:true,
					children:[
							
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