const props = {
  color: 'black', // has to be a valid colour, otherwise warnings are thrown
  isWarningVisible: false,
}

const state = {
  ...props,
  color: 'green', // has to be a valid colour, otherwise warnings are thrown
}


export {
  props, state
}
