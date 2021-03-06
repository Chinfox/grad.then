# grad.then() [![Build Status](https://travis-ci.org/chingu-voyage6/grad.then.svg?branch=master)](https://travis-ci.org/chingu-voyage6/grad.then)

[![Waffle.io - Columns and their card count](https://badge.waffle.io/chingu-voyage6/grad.then.svg?columns=all)](https://waffle.io/chingu-voyage6/grad.then)

## Chingu Voyage 6 project (bears-01 team)

### Life after freeCodeCamp

Completed your boot camp? No more freeCodeCamp challenges to take?

Looks like it's time to get a job!

`grad.then()` is aimed at you, to give you the information and tools
you need to get a job after completing your training.

---

## Project Progress

We are proud to work as a team, and here is our **project progress**.

[![Throughput Graph](https://graphs.waffle.io/chingu-voyage6/grad.then/throughput.svg)](https://waffle.io/chingu-voyage6/grad.then/metrics/throughput)

## Built With

The main libraries used in the development of `grad.then()` are shown
in the following table. For a complete list of libraries consult the
`package.json` file.

| Library                      | Purpose                                      |
| :--------------------------- | :------------------------------------------- |
| [Gatsby][gatsby]             | Blazing-fast static site generator for React |
| [Styled Components][sty-cmp] | Visual primitives for the component age.     |

<!-- links -->

[gatsby]: https://www.gatsbyjs.org/
[sty-cmp]: https://www.styled-components.com/

---

## Get started

1. Clone this repo and install dependencies:

```sh
git clone https://github.com/chingu-voyage6/grad.then.git
# or if you use SSH
git clone git@github.com:chingu-voyage6/grad.then.git
# change directory
cd grad.then
# install dependencies
npm install
```

2. Read the project wiki about
   [env variables](https://github.com/chingu-voyage6/grad.then/wiki/Env-variables).

3. Create `.env.development` and `.env.production` files in the root
   folder and add to both current values of tokens.

```sh
touch .env.development .env.production
# open files and add env variables and their values you have got from other project members
```

4. Run the app

```sh
npm run dev
# then open localhost:8000
```

---

## Git workflow

* master: production release.
* development: Upcoming change to be merged into master.
* developer branch: Individual branches for each developer.

`development` will have PR's from developer branches merged into it,
to do this:

```bash
# make your development branch
git branch dev-myUserName-issuenumber-description
# make your change and push to the development branch
git push origin dev-myUserName-issuenumber-description
```

Complete your PR through the GitHub UI.

As a good working practice request that another team member review and
merge your PR for a sanity check

---

## Deployment

The project is currently hosted on GitHub pages and can be deployed
from one of the teams machines with:

```sh
npm run deploy
```

This will build the site to the `public` folder and deploy to the
`gh-pages` branch on GitHub.

---

## Authors

| Name                        | Location         |
| :-------------------------- | :--------------- |
| [Marina Biletska][marina]   | Hurghada, Egypt  |
| [Miljan Djordjevic][miljan] | Belgrade, Serbia |
| [Scott Spence][scott]       | London, UK       |

<!-- links -->

[marina]: https://github.com/mar-bi
[miljan]: https://github.com/miljan-fsd
[scott]: https://github.com/spences10

## Contributors

| Name                    | Location       | Team        |
| :---------------------- | :------------- | :---------- |
| [Hasan Hacioglu][hasan] | Istanbul, TR   | V3-bears-16 |
| [Nedu Robert][nedu]     | Lagos, Nigeria | V4-bears-24 |

<!-- links -->

[hasan]: https://github.com/asanhix
[nedu]: https://github.com/Nedu

## Licence

[MIT](https://tldrlegal.com/license/mit-license)
