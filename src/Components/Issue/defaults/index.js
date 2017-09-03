const issueDefault = (override = {}) => {
  const def = {
    id: '',
    title: '',
    url: '',
    bodyText: '',
    reactions: {
      nodes: []
    }
  }

  return {...def, ...override}
}

const props = {
  issue: issueDefault(),
}

export {
  issueDefault, props
}
