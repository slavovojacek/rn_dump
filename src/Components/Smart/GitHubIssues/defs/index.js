const userDef = (id = '') => ({id})

const reactionDef = (override = {}) => {
  const def = {
    id: '',
    content: '',
    user: userDef()
  }

  return {...def, ...override}
}

const issueDef = (override = {}) => {
  const def = {
    id: '',
    title: '',
    url: '',
    bodyText: '',
    reactions: []
  }

  return {...def, ...override}
}

export {
  userDef, reactionDef, issueDef
}
