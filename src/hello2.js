// @flow

// const sayHelloTo = (name: string): string
import sayHelloTo from './hello'

export const sayHelloToJack = (): string => {
  return sayHelloTo('Jack')
}

export const sayHelloToNumber = (number: number): string => {
  return sayHelloTo(`${number}`)
}

/*

// OK
sayHelloToNumber(44)

// Error
sayHelloTo(44)
// yarn flow status:
//   Error: src/hello2.js:17
//    17: sayHelloTo(44)
//                   ^^ number. This type is incompatible with the expected param type of
//     3: const sayHelloTo = (name: string): string => {
//                                  ^^^^^^ string. See: src/hello.js:3
sayHelloToNumber('string')
// yarn flow status:
//   Error: src/hello2.js:18
//    18: sayHelloToNumber('string')
//                         ^^^^^^^^ string. This type is incompatible with the expected param type of
//     9: export const sayHelloToNumber = (number: number): string => {
//                                                 ^^^^^^ number

// eslint

let n1: number = 10
n1 = 'string'
// yarn flow status:
//   Error: src/hello2.js:23
//    23: n1 = 'string'
//             ^^^^^^^^ string. This type is incompatible with
//    22: let n1: number = 10
//                ^^^^^^ number
console.log(n1)

const n2: number = 'not a number'
// eslint: warning  'n2' is assigned a value but never used  no-unused-vars
// yarn flow status:
//   Error: src/hello2.js:26
//    26: const n2: number = 'not a number'
//                           ^^^^^^^^^^^^^^ string. This type is incompatible with
//    26: const n2: number = 'not a number'
//                  ^^^^^^ number

// type X = bool
// eslint: warning  'X' is defined but never used            no-unused-vars
// eslint: error    Use "boolean", not "bool"                flowtype/boolean-style

let a: AType
// eslint: warning  'a' is defined but never used            no-unused-vars
// yarn flow status:
//   Error: src/hello2.js:33
//    33: let a: AType
//               ^^^^^ AType. Could not resolve name

 */
