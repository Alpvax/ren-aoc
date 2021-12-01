import * as Array from '/mnt/c/Users/Nick/Programming/AoC/2021-ren/aoc/stdlib/ren/array.ren.mjs'
import * as Console from '/mnt/c/Users/Nick/Programming/AoC/2021-ren/aoc/stdlib/ren/console.ren.mjs'
import * as File from '/mnt/c/Users/Nick/Programming/AoC/2021-ren/aoc/stdlib/ren/file.ren.mjs'
import * as String from '/mnt/c/Users/Nick/Programming/AoC/2021-ren/aoc/stdlib/ren/string.ren.mjs'
import * as Result from '/mnt/c/Users/Nick/Programming/AoC/2021-ren/aoc/stdlib/ren/result.ren.mjs'

export function main ([year, day, part]) {
    return (() => {
        var parse = (($) => (Array.filterMap (String.toNumber)) ((String.split ('\n')) ($)))

        var input = (Result.map (parse)) (File.open ('./input.txt')
                ({sync: true}))

        return (($) => {
            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#ok' && $[1] == '01') {
                var numbers = $[0][1]
                return Console.log (solvePartOne (numbers))
            }

            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#ok' && $[1] == '02') {
                var numbers = $[0][1]
                return Console.log (solvePartTwo (numbers))
            }

            if (Array.isArray($) && $.length >= 2 && Array.isArray($[0]) && $[0].length >= 2 && $[0][0] == '#err') {
                var e = $[0][1]
                return Console.error (e)
            }

            return Console.warn (`Unknown part: "${part}".`)
        })([input, part])
    })()
}

function solvePartOne (numbers) {
    return Array.foldl (([n, prev]) => (num) => [num > prev
            ? n + 1
            : n, num])
        ([0, numbers[0]])
        (Array.drop (1) (numbers))
}

function solvePartTwo (numbers) {
    return (() => {
        function window ([n, prev, val0, val1]) {
            return (val2) => {
                return (() => {
                    var trip = val0 + val1 + val2

                    var _ = Console.log (`n: ${n}, prev: ${prev}, sum: ${val0} + ${val1} + ${val2} = ${trip}`)

                    return Console.log ([prev && trip > prev
                            ? n + 1
                            : n, trip, val1, val2])
                })()
            }
        }

        return (Array.foldl (window)
            ([0, undefined, numbers[0], numbers[1]])
            (Array.drop (2) (numbers)))[0]
    })()
}
