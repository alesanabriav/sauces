<?php

function slider_sc( $atts ){
	$at = shortcode_atts([
	 'images' => ''
	], $atts);

	$images = array_map(function($img){
		return wp_get_attachment_url($img['image']);
	},vc_param_group_parse_atts( $atts['images'] ));

	$props = [
		'images' => $images
	];

	ob_start();
	?> 
	 
	<section class="slider-container" data-props='<?php echo wp_json_encode($props) ?>'></section>
	
	<?php

	return ob_get_clean();
}

add_shortcode( 'slider', 'slider_sc' );