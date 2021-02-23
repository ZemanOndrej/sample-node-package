import reverseCase from './reverseCase';
import { writeFile } from 'fs'
import { performance } from 'perf_hooks'
import { createInterface } from 'readline';
const OUTPUT_FILE = process.env.OUTPUT_FILE || 'processed.json'

function main() {
    const keyboardInput = createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    keyboardInput.question('write something! \n', input => {
        keyboardInput.close();
        const start = performance.now();
        const result = reverseCase(input);
        const end = performance.now();
        printResult(result, end - start);
    });
}

function printResult(result: string, duration: number) {
    console.log(`the result is "${result}" in: ${duration}ms`);
    const output = {
        result,
        duration,
    };
    writeFile(OUTPUT_FILE, JSON.stringify(output), err => {
        if (err) {
            console.error(err);
        }
    })
}
export default main;