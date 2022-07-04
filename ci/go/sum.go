package main

import "fmt"

// main is the entry point for the application.
func main() {
	fmt.Println(sum(1, 2))
}

func sum(a, b int) int {
	return a + b
}

func sub(a, b int) int {
	return a - b
}
