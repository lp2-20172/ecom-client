const increment = (n) => {
    return {
        type: "INCREMENT",
        n: n
    }
}
const decrement = (n) => {
    return {
        type: "DECREMENT",
        n: n
    }
}
export {increment, decrement }