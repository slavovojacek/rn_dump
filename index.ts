type ID = string

interface Favourite {
  id: ID

}

const biller = {
  id: '123',
  displayName: 'John Doe',
  account: {
    number: 123
  },
  accounts: [
    {
      id: 'abc',
      number: 123
    }
  ]
}

const myRefs = [
  {
    entity: {
      id: 'x',
      displayName: 'Some Name',
      accounts: [
        { id: 'a', number: '123456' },
        { id: 'b', number: '123456' },
        { id: 'c', number: '123456' }
      ]
    },
    accountId: 'c',
  }
]

const favourites = [{
  id: 'ccc',
  displayName: 'My Andry Friend',
  refs: myRefs
}]

favourites.map(favourite => {
  return favourite.refs.map(ref => {
    return <Text>
      {ref.entity.displayName} – {ref.entity.accounts.find(_ => id === ref.accountId)}
      </Text>
  })
})
