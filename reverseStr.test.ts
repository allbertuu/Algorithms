import { reverseStr } from "./reverseStr.js";
import { expect, test } from "vitest";

test("reverse strings", () => {
    expect(reverseStr("teste")).toBe("etset");
    expect(reverseStr("carro")).toBe("orrac");
});
