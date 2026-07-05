import { solveFile } from "./ai.js";
import { readFile, writeFile } from "fs/promises";

const args = process.argv.slice(2);

if (args[0] === "--solve") {

    const file = args[1];

    if (!file) {
        console.log("Usage:");
        console.log("chat solve <file>");
        process.exit(1);
    }

    try {

        const code = await readFile(file, "utf8");

        console.log("🤖 Solving...");

        let solved = await solveFile(code);

        solved = solved
            .replace(/^```[\w-]*\n?/, "")
            .replace(/```$/m, "")
            .trim();

        await writeFile(file, solved);

        console.log("✅ File updated.");

    } catch (err) {
        console.error(err.message);
    }

    process.exit();
}