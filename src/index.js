import readline from "readline";
import { ask } from "./ai.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("🤖 Gemini Chat");
console.log("Type 'exit' to quit.\n");

function chat() {
    rl.question("You > ", async (message) => {

        if (message === "exit") {
            rl.close();
            return;
        }

        const reply = await ask(message);

        console.log("\nGemini >", reply);
        console.log();

        chat();
    });
}

chat();