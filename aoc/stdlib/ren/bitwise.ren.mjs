// and : Number -> Number -> Number
export function and(a) {
    return (b) => a & b
}

// or : Number -> Number -> Number
export function or(a) {
    return (b) => a | b
}

// not : Number -> Number
export function not(number) {
    return ~number
}

// xor : Number -> Number -> Number
export function xor(a) {
    return (b) => a ^ b
}

// lshift : Number -> Number -> Number
export function lshift(shift) {
    return (number) => number << shift
}

// rshift : Number -> Number -> Number
export function rshift(shift) {
    return (number) => number >> shift
}
