fetch('https://v1.hitokoto.cn')
				.then(response => response.json())
				.then(data => {
					const hitokoto = document.querySelector('.bt')
					const fom = document.querySelector('.form')
					hitokoto.innerText = data.hitokoto
					fom.innerText = data.from
				})
				.catch(console.error)
