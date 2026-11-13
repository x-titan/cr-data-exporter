import { describe, it, expect } from "vitest"
import { hello } from "../src/hello"

describe("Execution hello function", () => {
  it("returns a greeting for a given name", () => {
    // Arrange: a name string
    const name = "Node"

    // Act: call hello function
    const result = hello(name)

    // Assert: greeting matches the expected format
    expect(result).toBe("Hello, Node!")
  })

  it("handles empty string as name", () => {
    // Arrange: empty name
    const name = ""

    // Act: call hello function
    const result = hello(name)

    // Assert: greeting still returns a valid string
    expect(result).toBe("Hello, !")
  })
})
