const repl = require("repl");
function calculator(input) {
  try {
    const result = eval(input);
    return result;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
console.log("Command-Line Calculator");
const r = repl.start({
  prompt: "Calculator> ",
  eval: (input, context, filename, callback) => {
    const result = calculator(input);
    callback(null, result);
  },
});
r.on("exit", () => {
  console.log("Exiting the calculator");
});
