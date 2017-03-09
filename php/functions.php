<?php

function isOldEnough($age) {
  if ($age > 17) {
    return true;
  }
}

if  (isOldEnough(19)) {
  echo "You're over 18";
}
