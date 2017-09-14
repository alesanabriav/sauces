
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo blog_info('title'); ?></title>
  <!--
    Ejemplo de como agregar un archivo
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/style.css?v=<?php echo filemtime(get_template_directory() . '/style.css') ?>">
  -->

  <!--wordpress header files-->
	<?php wp_head(); ?>
	<!-- /wordpress header files-->
</head>
<body>
