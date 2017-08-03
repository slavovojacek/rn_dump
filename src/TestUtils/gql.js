const assertQueryOrMutation = (QoM) => {
  test('matches Query or Mutation', () => {
    expect(QoM).toMatchSnapshot()
  })
}

const assertGql = (Component) => {
  const { gql } = Component
  expect(gql instanceof Object).toEqual(true)
  Object
    .keys(gql)
    .forEach(k => assertQueryOrMutation(gql[k]))
}

export { assertGql }
