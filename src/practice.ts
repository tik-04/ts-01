1.
function getStatusMessage(status: 'success' | 'error' | 'loading'): string {
    if (status === "success") {
        return "Operation was successful"
    }
    if (status === "error") {
        return "Something went wrong"
    }
    if (status === "loading") {
        return "Loading..."
    }
    return "";
}

2.
type ID = string | number;

interface User {
    id: ID
    name: string
    isAdmin: boolean
}

3.
type MixedInput = (string | number)[];

function printInputs(inputs: MixedInput): void {
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i])
    }
}

const test: MixedInput = ["hi", 1, "yo", 2, 3];

printInputs(test)

4.

function messageLog(message: string, prefix?: string): string {
    if (prefix) {
        console.log(`${prefix}: ${message}`)
        return ""
    }
    console.log(message)
    return ""
    
}


5.

function process(value: string | number): string | number {
    switch (typeof (value)) {
        case "string": 
            return value.length
        case "number":
            return value ** 2
        default:
            throw new Error("Unexpected type");
    }

}

6.
let input: unknown = "Hello World";

if (typeof(input) == "string") {
    console.log(input.length);
}

7.

type enumRoll = 'Admin' | 'Editor' | 'Viewer'

function checkPermission(role: enumRoll): boolean{
    if (role === 'Editor' || role === 'Viewer') {
        throw new Error("Not a Admin")
    }
    return true
    
}

8.

interface Config {
    readonly version: string
    debug: boolean
}





