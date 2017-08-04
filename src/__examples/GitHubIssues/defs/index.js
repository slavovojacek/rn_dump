const userDef = (id = '') => ({id})

const reactionDef = ({
                       id = '',
                       content = '',
                       user = userDef()
                     }) => ({
  id, content, user
})

const issueDef = ({
                    id = '',
                    title = '',
                    url = '',
                    bodyText = '',
                    reactions = []
                  }) => ({
  id, title, url, bodyText, reactions
})

export {
  userDef, reactionDef, issueDef
}
