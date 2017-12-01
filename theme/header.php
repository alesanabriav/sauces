
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta content="width=device-width,initial-scale=1" name=viewport>
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo bloginfo('title'); ?></title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
  <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet">
  <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Add the slick-theme.css if you want default styling -->
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"/>
  <!-- Add the slick-theme.css if you want default styling -->
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"/>
  <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/style.css?v=<?php echo filemtime(get_template_directory() . '/style.css') ?>">
  <!--
    Ejemplo de como agregar un archivo
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/style.css?v=<?php echo filemtime(get_template_directory() . '/style.css') ?>">
  -->

  <style>
    body {
      font-family: 'PT Sans', sans-serif;
      background: url('<?php echo get_template_directory_uri() ?>/public/img/wood_bg@2x.png');
      font-size: 14px;
      background-size: contain;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .wpb_button, .wpb_content_element, ul.wpb_thumbnails-fluid>li {
      margin-bottom: 0!important;
    }

    .section-content {
      background: rgba(255, 255, 255, 0.4);
      border-left: 1px solid #000;
      padding: 60px;
    }
    
    ul {
      padding: 0;
    }

    li {
      list-style: none;
    }

    a:hover {
      text-decoration: none;
    }
  </style>

  <!--wordpress header files-->
	<?php wp_head(); ?>
	<!-- /wordpress header files-->
</head>
<body>
<?php $props = ["menu" => menu_to_array('header')]; ?>

<div 
  class="header-container" 
  data-props='<?php echo wp_json_encode($props) ?>'
>
</div>