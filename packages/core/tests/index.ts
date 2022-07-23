import { test } from "uvu";
import * as assert from "uvu/assert";
import { foo } from "../src/index";

test("smoke", () => {
    assert.is(foo, 1);
});

test.run();
