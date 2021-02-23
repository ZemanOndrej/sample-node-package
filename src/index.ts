import { writeFile } from 'fs'
import { performance } from 'perf_hooks'
import { createInterface } from 'readline';
import reverseCase from './reverseCase';


const keyboardInput = createInterface({
    input: process.stdin,
    output: process.stdout
});
const OUTPUT_FILE = 'processed.json'

keyboardInput.question('Who are you?', input => {
    keyboardInput.close();
    const start = performance.now()
    const result = reverseCase(input)
    const end = performance.now()
    console.log(result)
    const output = {
        result,
        time: end - start
    }
    writeFile(OUTPUT_FILE, JSON.stringify(output), err => {
        if (err) {
            console.log(err)
        }
    }
    )
});

