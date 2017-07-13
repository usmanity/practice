<?php

namespace spec;

use PrimeFactors;
use PhpSpec\ObjectBehavior;
use Prophecy\Argument;

class PrimeFactorsSpec extends ObjectBehavior
{
    function it_is_initializable()
    {
        $this->shouldHaveType(PrimeFactors::class);
    }

    function it_should_return_empty_array_for_1()
    {
        $this->generate(1)->shouldReturn([]);
    }

    function it_should_return_2_for_2()
    {
        $this->generate(2)->shouldReturn([2]);
    }

    function it_should_return_2_2_5_5_for_100()
    {
        $this->generate(100)->shouldReturn([2, 2, 5, 5]);
    }
}
