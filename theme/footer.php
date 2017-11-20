
<!--wordpress files-->
<?php wp_footer() ?>
<!-- /wordpress files-->

<!--
  Ejemplo de como agregar un archivo
  <script src="<?php echo get_template_directory_uri() ?>/app.js?v=<?php echo filemtime(get_template_directory() . '/app.js') ?>"></script>
-->

<script>
  window.templateUri = '<?php echo get_template_directory_uri() ?>';
</script>

<script src="<?php echo get_template_directory_uri() ?>/public/js/vendor.js?v=<?php echo filemtime(get_template_directory() . '/public/js/vendor.js') ?>"></script>
<script src="<?php echo get_template_directory_uri() ?>/public/js/app.js?v=<?php echo filemtime(get_template_directory() . '/public/js/app.js') ?>"></script>

</body>
</html>
