<?php

function slider_vc() {

	$subparams = [[
		"type" => "attach_image",
		"heading" => "Ingresar imagen",
		"param_name" => "image"
	]];

	$params = [
    [
      "type" => "textfield",
      "heading" => "enter interval",
      "param_name" => "interval",
      "value" => 5000
    ],
    [
      'type' => 'param_group',
      'value' => '',
      'param_name' => 'images',
      'params' => $subparams
    ]
	];
	
  vc_map(
    array(
      "name" =>  "Slider",
      "base" => "slider",
      "category" =>  "Sauces",
      "params" => $params
    )
  );
};

add_action( 'vc_before_init', 'slider_vc' );