# beers-challenge-front-santander

Challenge resolution for SantanderRio.

# context

MainAPI: sera la encagargada de proveer toda la informacion referida a los Meetups, datos de usuario, quizas login.

WeatherAPI: es la API de weatherbit que nos provee el pronostico del clima de aqui a 15 dias, por lo que para poder acceder a informacion referida al clima y la cantidad de packs de birras, debemos estar dentro de dicha fecha, es
decir, 15 dias antes de la fecha del evento.

Se encuentra el travis.yml, pero faltaria el script de deploy

Tampoco pude alcanzar el tiempo con los tests.

Quiza, el tiempo (para resolver aspectos de testing, CI/CD) se ve muy influenciado por la dificultad de tener que
pensar en el diseño, en la UI, que queda mejor, y que no.

## Development

- `yarn`
- `yarn start`
- Open [http://localhost:3000](http://localhost:3000)

(Remember to run `nvm use` in the root)

## Deployment

- `yarn production`

## Scripts

- ### `yarn start`

  Runs the app in dev mode. Open [http://localhost:3000](http://localhost:3000).

- ### `yarn test`

  Launches the test runner in interactive watch mode.

- ### `yarn build`

  Builds the app for production to the `build` folder.<br />
  It correctly bundles React in production mode and optimizes the build for the best performance.
  The build is minified and the filenames include the hashes.

- ### `yarn eject`

  **Note: this is a one-way operation. Once you `eject`, you can’t go back!**
  If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
  Instead, it will copy all the configuration files and the transitive dependencies right into your project so you have full control over them.

- ### `yarn production`

  Runs `yarn build` and creates a server to serve the app.

- ### `yarn lint`

  Runs Eslint validations.

- ### `yarn lint:fix`

  Runs Eslint validation and tries to fix current issues if possible.

- ### `yarn tsc`

  Runs type checks.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
