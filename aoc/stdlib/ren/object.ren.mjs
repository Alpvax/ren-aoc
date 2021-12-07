import * as Maybe from './maybe'

// get : String -> * -> Maybe a
export function get(key) {
    return (obj) => {
        return key in obj
            ? Maybe.just(obj[key])
            : Maybe.nothing
    }
}

// set : String -> a -> * -> *
export function set(key) {
    return (a) => (obj) => {
        return { ...obj, [key]: a }
    }
}

// has : String -> * -> Boolean
export function has(key) {
    return (obj) => {
        return key in obj
    }
}

// mapProperty : (Maybe a -> b) -> String -> * -> *
export function mapProperty(f) {
    return (key) => (obj) => {
        return set (key) (f (get (key) (obj))) (obj)
    }
}