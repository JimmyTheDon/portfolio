$(document).ready(function() {
	$('#fullpage').fullpage({
		parallax: true,
		parallaxKey: 'amltbXlkb24ubmV0X004R2NHRnlZV3hzWVhnPXBTNw==',
		$('#checkbox').change(function(){
			setInterval(function () {
				moveRight();
			}, 3000);
		});
	});
});