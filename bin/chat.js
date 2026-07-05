#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes("--ai")) {
    import("../src/index.js");
} else if (args[0] === "solve") {
    process.argv = [
        process.argv[0],
        process.argv[1],
        "--solve",
        args[1]
    ];

    import("../src/solve.js");
} else {
    console.log("Usage:");
    console.log("chat --ai");
    console.log("chat solve <file>");
}