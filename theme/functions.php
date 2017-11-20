<?php

/*
En ajax van todas las funciones que manejan el ajax enviado desde el front.
Documentación:
https://codex.wordpress.org/Plugin_API/Action_Reference/wp_ajax_(action)
*/
require 'api/index.php';

/*
en lib va todas las librerias que necesitamos crear.
*/
require 'lib/index.php';

/*
en options va todas las paginas de opciones.
Documentación:
https://codex.wordpress.org/Creating_Options_Pages
*/
require 'options/index.php';

/*
en shortcodes va todos los shortcodes.
Documentación:
https://codex.wordpress.org/Creating_Options_Pages
*/
require 'shortcodes/index.php';


register_nav_menus(
  array(
    'header' => 'Header nav',
    'mobile' => 'Mobile nav'
  )
);

