package main

import "fmt"

func main() {
  var farenheit float32 = 100.0
  var celsius float32 = (farenheit - 32) * 5/9
  fmt.Println("Celsius is", celsius)
}
