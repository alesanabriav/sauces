## BS Theme
Tema base para empezar.

### Como organizar los archivos
Cada carpeta tiene un index.php en el cual se deben hacer los require para llamar los archivos que se vayan creando dentro de la carpeta.

#### Ejemplo:

dentro de la carpeta ajax creamos un archivo llamado contact.php, entonces el archivo index.php deberia llamarlo de la siguiente manera.

ajax/index.php
```php
  require 'contact.php';
```

y así con todas las carpetas y archivos nuevos.
