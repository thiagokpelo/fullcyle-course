package main

import "testing"

func TestSum(t *testing.T) {
	if sum(1, 2) != 3 {
		t.Error("Expected 3, got ", sum(1, 2))
	}
}

func TestSub(t *testing.T) {
	if sub(2, 1) != 1 {
		t.Error("Expected 1, got ", sub(1, 2))
	}
}

func TestMult(t *testing.T) {
	if mult(2, 3) != 6 {
		t.Error("Expected 6, got ", mult(2, 3))
	}
}

func TestDiv(t *testing.T) {
	if div(6, 3) != 2 {
		t.Error("Expected 2, got ", div(6, 3))
	}
}
