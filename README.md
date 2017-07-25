## Playground

### Setup

You will need to create a `.env` file with a (Repo read-only)
GitHub token – you can generate a new one in Settings -> Personal access tokens.

```
echo "GH_API_TOKEN=${token}" > .env
```

After this step is done, run `npm install` to install dependencies.

### Running

#### APP

iOS: `react-native run-ios`

#### STORYBOOK

iOS: `npm run storybook` and then in a new tab `react-native run-ios`.

_Note: Use the browser to navigate stories._

#### TESTS

`npm test`
