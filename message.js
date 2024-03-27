const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};
    
export default message;


// Named Exports
// Let us create a file named person.js, and fill it with the things we want to export.

// You can create named exports two ways. In-line individually, or all at once at the bottom.

// export const name = "Jesse";
// export const age = 40;
// or
const name = "Jesse";
const age = 40;

export {name, age};