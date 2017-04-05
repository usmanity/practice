<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Animals</title>
  </head>
  <body>
    <ul>
      <?php
        foreach ($animals as $animal) {
          echo "<li>$animal</li>";
        }
      ?>
    </ul>

  </body>
</html>
