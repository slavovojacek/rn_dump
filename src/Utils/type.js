const isNull = _ => _ === null || typeof _ === 'undefined'
const assertObject = _ => _ instanceof Object

export { isNull, assertObject }
export default { isNull }
