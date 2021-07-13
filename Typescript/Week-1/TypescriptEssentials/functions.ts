
// equal sign here defines a default value if none is given. also can do: ?
function sendGreeting(greeting: string = "good morning"): void {
    console.log(greeting);
}

function newGreeting(greet?: string): void {
    if (greet === "") {
        console.log("heyo!");
    }
    console.log(greet);
}

// 