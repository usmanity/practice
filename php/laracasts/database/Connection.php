<?php

class Connection
{
  public static function make()
  {
    try {
      return new PDO('mysql:host=127.0.0.1;dbname=mytodos;', 'root', 'password')
    } catch (PDOException $e) {
      die($e->getMessage());
    }
  }
}
