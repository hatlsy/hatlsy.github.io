fetch('https://api.iyk0.com/60s/')
	.then(response => response.json())
	.then(data => {
		document.querySelector('.img img').src = data.imageUrl
	})
	.catch(console.error)
