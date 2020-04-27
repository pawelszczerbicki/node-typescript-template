# NodeJS template with TS and 
Simple and useful template for NodeJS written in Typescript with MongoDB and Firebase Auth support

## Run and build
`yarn dev` to run in watch mode

`yarn build` to build locally

`yarn start` to start version compiled to JS

Required properties are:

* `GOOGLE_APPLICATION_CREDENTIALS` service account key for Firebase
* `DB_URL` MongoDB url with a username and password

In order to use `dotenv` rename `.env.template` to `.env`

##Deploy
Project is ready to be deployed on `Google Cloud Platform (GCP)` using `Gitlab CI`

To do so add below properties to your `gitlab` CI pipeline:
* `CLOUDSDK_CORE_PROJECT`
* `SERVICE_ACCOUNT`
* `DB_URL`

When pipeline succeed project will be deployed on GCP App Engine in default service

##Issues
If you find any problems regarding this project please place issue on Github 
 
