// add : Number -> Number -> Number
export function add(x) {
    return (y) => {
        return x + y
    }
}

// sub : Number -> Number -> Number
export function sub(x) {
    return (y) => {
        return x - y
    }
}

// mul : Number -> Number -> Number
export function mul(x) {
    return (y) => {
        return x * y
    }
}

// div : Number -> Number -> Number
export function div(x) {
    return (y) => {
        return x / y
    }
}

// pow : Number -> Number -> Number
export function pow(x) {
    return (y) => {
        return x ** y
    }
}

// mod : Number -> Number -> Number
export function mod(x) {
    return (y) => {
        return x % y
    }
}

//
export function incr(n) {
    return n + 1
}

export function decr(n) {
    return n - 1
}

// min : Number -> Number -> Number
export function min(x) {
    return (y) => {
        return Math.min(x, y)
    }
}

// max : Number -> Number -> Number
export function max(x) {
    return (y) => {
        return Math.max(x, y)
    }
}

// abs : Number -> Number
export function abs(x) {
    return Math.abs(x)
}
