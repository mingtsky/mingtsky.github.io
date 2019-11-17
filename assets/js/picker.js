//
// Texture Picker
//

window.onload = function() {
	// Handle Texture Picker
	const $picker = document.querySelector('#texture-picker');
	const $hidePicker = document.querySelector('#hidePicker');
	const $header = document.querySelector('header');
<<<<<<< HEAD
	
	$picker.onclick = function(e) {
		const textureName = e.target.id;
=======
	$header.setAttribute('class', `texture-qiuri`);
	
	$picker.onclick = function(e) {
		const textureName = e.target.id;
		// console.log(textureName)
>>>>>>> 修改
		if (textureName && textureName != 'texture-picker' && textureName != 'hidePicker') {
			$header.setAttribute('class', `texture-${textureName}`);
		}
	}

	$hidePicker.onclick = function () {
		$picker.style['display'] = 'none';	
	}
}