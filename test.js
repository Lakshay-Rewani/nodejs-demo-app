const assert = require("assert");

const appName = "nodejs-demo-app";

assert.strictEqual(typeof appName, "string");
assert.ok(appName.length > 0);

console.log("✅ All tests passed successfully!");