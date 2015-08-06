package main

import "fmt"

func main()  {
  // first
  i := 10
  if i > 10  {
    fmt.Println("Big")
  } else {
    fmt.Println("Small")
  }

  // Second
  for counter := 1; counter <= 100; counter++ {
    if counter % 3 == 0 {
      fmt.Println(counter)
    }
  }

  // third → simple fizzbuzz loop
  for c := 1; c <= 100; c++ {
    if c % 3 == 0 && c % 5 == 0 {
      fmt.Println("FizzBuzz")
    } else if c % 3 == 0 {
      fmt.Println("Fizz")
    } else if c % 5 == 0 {
      fmt.Println("Buzz")
    } else {
      fmt.Println(c)
    }
  }
}
