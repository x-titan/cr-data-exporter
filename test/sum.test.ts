import { describe, it, expect } from "vitest"
import { sum } from "../src/sum"

describe("sum function", () => {

  it("should return the sum of two positive numbers", () => {
    // Arrange: two positive numbers
    const a = 2
    const b = 3

    // Act: call sum function
    const result = sum(a, b)

    // Assert: result matches the expected sum
    expect(result).toBe(5)
  })

  it("should return the sum when one number is negative", () => {
    // Arrange: a negative and a positive number
    const a = -2
    const b = 3

    // Act: call sum function
    const result = sum(a, b)

    // Assert: result is correct
    expect(result).toBe(1)
  })
})
