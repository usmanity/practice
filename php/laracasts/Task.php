<?php

class Task {
  public $description;

  public function __construct()
  {
        var_dump('CALLED');
  }
}

$task = new Task();

var_dump($task);
