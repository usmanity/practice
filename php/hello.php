<?php

$greeting = htmlspecialchars($_GET['greeting']);
$name = htmlspecialchars($_GET['name']);

require("hello.view.php");
