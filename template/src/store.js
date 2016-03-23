const key = 'VUE-CHAT-v3';

// 虚拟数据
if (!localStorage.getItem(key)) {
	let now = new Date();
	
	let data = {
		// 登录用户
		user: {
			id: 1,
			name: 'Coffce',
			img: 'dist/images/1.jpg'
		},
		
		// 用户列表
		userList: [
			{
				id: 2,
				name: '示例介绍2',
				img: 'dist/images/2.png'
			},
			{
				id: 3,
				name: 'webpack3',
				img: 'dist/images/3.jpg'
			},
			{
				id: 4,
				name: 'webpack4',
				img: 'dist/images/3.jpg'
			},
			{
				id: 5,
				name: '示例介绍5',
				img: 'dist/images/2.png'
			},
			{
				id: 6,
				name: 'webpack6',
				img: 'dist/images/3.jpg'
			},
			{
				id: 7,
				name: 'webpack7',
				img: 'dist/images/3.jpg'
			},
			{
				id: 8,
				name: '示例介绍8',
				img: 'dist/images/2.png'
			},
			{
				id: 9,
				name: 'webpack9',
				img: 'dist/images/3.jpg'
			},
			{
				id: 10,
				name: 'webpack10',
				img: 'dist/images/3.jpg'
			},
			{
				id: 11,
				name: 'webpack11',
				img: 'dist/images/3.jpg'
			},
			{
				id: 12,
				name: 'webpack12',
				img: 'dist/images/3.jpg'
			},
		],

		// 会话列表
		sessionList: [
			{
				userId: 2,
				messages: [
					{
						text: 'Hello，这是一个基于Vue + Webpack构建的简单chat示例，聊天记录保存在localStorge。简单演示了Vue的基础特性和webpack配置。',
						date: now
					}, 
					{
						text: '项目地址: https://github.com/coffcer/vue-chat',
						date: now
					}
				]
			},
			{
				userId: 3,
				messages: []
			},
			{
				userId: 4,
				messages: []
			},
			{
				userId: 5,
				messages: []
			},
			{
				userId: 6,
				messages: []
			},
			{
				userId: 7,
				messages: []
			},
			{
				userId: 8,
				messages: []
			},
			{
				userId: 9,
				messages: []
			},
			{
				userId: 10,
				messages: []
			},
			{
				userId: 11,
				messages: []
			},
			{
				userId: 12,
				messages: []
			},
		],
	};
	
	localStorage.setItem(key, JSON.stringify(data));
}

export default {
	fetch () {
		return JSON.parse(localStorage.getItem(key));
	},
	save (store) {
		localStorage.setItem(key, JSON.stringify(store));
	}
};