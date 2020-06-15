import * as test from "https://deno.land/std/testing/asserts.ts";

const { assertEquals, assertStrictEquals, assertThrows, assertThrowsAsync } =
  test;

// test.

Deno.test({
  name: "testing example",
  fn(): void {
    assertEquals("world", "world");
    assertEquals({ hello: "world" }, { hello: "world" });
  },
});

Deno.test("example", function (): void {
  assertEquals("world", "world");
  assertEquals({ hello: "world" }, { hello: "world" });
});

Deno.test("isStrictlyEqual", function (): void {
  const a = {};
  const b = a;
  assertStrictEquals(a, b);
});

// This test fails
Deno.test("isNotStrictlyEqual", function (): void {
  const a = {};
  const b = {};
  assertStrictEquals(a, b);
});

Deno.test("doesThrow", async function (): Promise<void> {
  await assertThrowsAsync(
    async (): Promise<void> => {
      throw new TypeError("hello world!");
    },
  );
  await assertThrowsAsync(async (): Promise<void> => {
    throw new TypeError("hello world!");
  }, TypeError);
  await assertThrowsAsync(
    async (): Promise<void> => {
      throw new TypeError("hello world!");
    },
    TypeError,
    "hello",
  );
  await assertThrowsAsync(
    async (): Promise<void> => {
      return Promise.reject(new Error());
    },
  );
});

Deno.test("doesThrow", function (): void {
  assertThrows((): void => {
    throw new TypeError("hello world!");
  });
  assertThrows((): void => {
    throw new TypeError("hello world!");
  }, TypeError);
  assertThrows(
    (): void => {
      throw new TypeError("hello world!");
    },
    TypeError,
    "hello",
  );
});

// This test will not pass
Deno.test("fails", function (): void {
  assertThrows((): void => {
    console.log("Hello world");
  });
});

// This test will not pass
Deno.test("fails", async function (): Promise<void> {
  await assertThrowsAsync(
    async (): Promise<void> => {
      console.log("Hello world");
    },
  );
});

/**
 * bench
 */

import {
  runBenchmarks,
  bench,
  BenchmarkRunResult,
} from "https://deno.land/std/testing/bench.ts";

bench(function forIncrementX1e9(b): void {
  b.start();
  for (let i = 0; i < 1e9; i++);
  b.stop();
});

runBenchmarks();

bench({
  name: "runs100ForIncrementX1e6",
  runs: 100,
  func(b: any): void {
    b.start();
    for (let i = 0; i < 1e6; i++);
    b.stop();
  },
});

runBenchmarks({ only: /desired/, skip: /exceptions/ });

runBenchmarks()
  .then((results: BenchmarkRunResult) => {
    console.log(results);
  })
  .catch((error: Error) => {
    // ... errors if benchmark was badly constructed
  });

import * as diff from "https://deno.land/std/testing/diff.ts";

console.dir(diff.default([{ a: "aa" }], [{ b: "bb" }]))
