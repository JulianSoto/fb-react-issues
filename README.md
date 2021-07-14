# How to run this app in dev

After cloning the repo, install the dependencies with `yarn`

Once installed, run `yarn start`

# How this app works

This is a very simple app that gets a list of Issues from the official Facebook React Github repository, and renders them in a list.

This is app has an input where the user can search for specific terms and the list will automatically update the results if they include these terms. There's a little delay after the user types into the input, to avoid unnecessary requests. To achieve this little delay, it was necessary to use an `AbortController` and `setTimeout` to cancel the request if the user types too fast.

The search input is focused automatically when the page loads. The issues are focusable as well, the user can navigate through them using the `Tab` key.