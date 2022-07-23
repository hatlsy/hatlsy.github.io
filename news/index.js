fetch('http://bjb.yunwj.top/php/tp/lj.php')
	.then(response => response.json())
	.then(data => {
		document.querySelector('.img img').src = data.tp
	})
	.catch(console.error)
