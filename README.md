# DBD Randomizer Web UI

This project provides a web frontend using React, Redux, and Typescript. It utilizes the backend service, 
[dbd_ranodmizer_service](https://github.com/CryptoRAT/dbd_randomizer_service) to provide character builds for
the hit asymetrical horror game [Dead By Daylight](https://deadbydaylight.com/).

## Available Scripts

In the project directory, you can run:

### `yarn build`

Uses production environment variables and puts the result in the 
`build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn start`

Runs the production build created with `yarn build` using [serve](https://www.npmjs.com/package/serve). 
If run locally, this will start the server on Open [http://localhost:3000](http://localhost:3000).


### `yarn run dev`

Runs the development build of this project. You can modify the location of the backend service in the `.env.local` file.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Deployment

You can learn how this is deployed here: [deployment](./src/documentation/DEPLOYMENT.md)

### TODOs

You can see a list of things I would like to add to this site here: [wish list])(./src/documentation/WITHLIST.md)
