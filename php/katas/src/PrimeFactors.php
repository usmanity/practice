<?php

class PrimeFactors
{
  public function generate($number)
  {
    $prime_factors = [];
    for ($divisor = 2; $number > 1; $divisor++)
    {
      for (; $number % $divisor == 0; $number /= $divisor)
      {
        $prime_factors[] = $divisor;
      }
    }
    return $prime_factors;
  }
}
