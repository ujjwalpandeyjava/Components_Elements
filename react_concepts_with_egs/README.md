## How to run app?

    Node version >= 20.6.0
    
    Add the .env.profileName in root directory of project in case of local or remote both.
    
    .env is supposed to be secret thus not pushing on git and docker repositories.

`npm run start`: for development\
`npm run start:test`: for testing\
`npm run start:production`: for production

### Must todo before starting the app

- Create profiles with `.env.profile_name` files,
- Default profiles used by CRA (Create React App):
  - development
  - test
  - production
- In case your profile is different than defaults, update the start/build command accordingly, example: `npm run start/build --env-file .env.profile_name`

### Run using custom profiles

- `npm run start --env-file .env.profile_name`
- By default with `npm run start`, react starts app with `.env.local` in case not present it looks for `.env.development`.
- `npm run build` starts with `.env.production`

### Create build using

- `npm run build`
- By default creates build with `.env.production`
- **Port** available in the .env.profile_name file (Works with only with start commands not with build).
- Want to run build on some other port than 3000? use command `serve -s build -p {portNumber}`

# Docker help

## Port
Exposed and the running port number must be same.\
After that we can redirect to some other port.
