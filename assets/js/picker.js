//
// Texture Picker
//

window.onload = function() {
	// Handle Texture Picker
	const $picker = document.querySelector('#texture-picker');
	const $hidePicker = document.querySelector('#hidePicker');
	const $header = document.querySelector('header');
	$header.setAttribute('class', `texture-black`);
	
	$picker.onclick = function(e) {
		const textureName = e.target.id;
		// console.log(textureName)
		if (textureName && textureName != 'texture-picker' && textureName != 'hidePicker') {
			$header.setAttribute('class', `texture-${textureName}`);
		}
	}

	$hidePicker.onclick = function () {
		$picker.style['display'] = 'none';	
	}
}