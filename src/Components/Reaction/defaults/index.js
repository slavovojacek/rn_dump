const userDefault = (id = '') => ({id})

const reactionDefault = (override = {}) => {
  const def = {
    id: '',
    content: '',
    user: userDefault()
  }

  return {...def, ...override}
}

const props = {
}

export {
  reactionDefault, props
}
