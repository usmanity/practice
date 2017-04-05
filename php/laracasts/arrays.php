<?php

class Tweet {

        public $username;

        public $tweet;

        public function __construct($username, $tweet) {
                $this->username = $username;
                $this->tweet = $tweet;
        }

}
