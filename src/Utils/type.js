import { _Some, _None } from '@threestup/monads'

const makeThrowable = (assert, expectedType) => (val) => {
  const res = assert(val)
  if (res === false) {
    throw new Error(
      `Error – expected ${expectedType}, instead got ${typeof val}`
    )
  }
}

const assertNull = _ => _ === null || typeof _ === 'undefined'
const assertBoolean = _ => typeof _ === 'boolean'
const assertObject = _ => _ instanceof Object
const assertOption = _ => _ instanceof _Some || _ instanceof _None

const throwIfNotBoolean = makeThrowable(assertBoolean, 'Boolean')
const throwIfNotObject = makeThrowable(assertObject, 'Object')
const throwIfNotOption = makeThrowable(assertOption, 'Option')

export {
  assertNull, assertBoolean, assertObject, assertOption,
  throwIfNotBoolean, throwIfNotObject, throwIfNotOption
}
