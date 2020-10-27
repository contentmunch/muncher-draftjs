![Test release and publish](https://github.com/contentmunch/muncher/workflows/Test%20release%20and%20publish/badge.svg)
# Muncher  
Muncher is a rich text editor based on [Draftjs](https://draftjs.org/) with a focus on content reuse. 

## Using Muncher
To use this component library:

* First create a [github personal access token](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token), if you do not already have one.
* Add it as an environment variable:
    ```
    #github personal access token
    export PACKAGES_AUTH_TOKEN=<personal access token>
    
    ``` 
* create a `.npmrc` file at the root level of your project
    ```
    @contentmunch:registry=https://npm.pkg.github.com/
    //npm.pkg.github.com/:_authToken=${PACKAGES_AUTH_TOKEN}
    ```
* add the npm package to your project
    ```
    $ npm install @contentmunch/muncher
    ```
  

## Coding rules
We use [GitHub Flow](https://guides.github.com/introduction/flow/) for our project workflow.
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* Create pull request against develop to merge your code.
* All features or bug fixes **must be tested** by one or more [specs][unit-testing].

### Pull request format

```
<subject>

* changes 1
* changes 2

fixes/closes #<github issue number>

```

### Git commit format

```
<type>: <subject>
<BLANK LINE> 
<body> optional
```
* Any line of the commit message cannot be longer 100 characters. This allows the message to be easier to read on GitHub as well as in various git tools.
* The subject contains succinct description of the change:
    * use the imperative, present tense: "change" not "changed" nor "changes"
    * no dot (.) at the end
* Commit type:
    * feat: a new feature
    * fix: a bug fix
    * refactor: a code change that neither fixes a bug nor adds a feature
    * test: adding missing tests
    * chore: changes to the build process or auxiliary tools and libraries such as documentation generation

## Installation guide
In the project directory, you can run:

### `npm start`
Launches the component explorer on port 6006

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the package library.