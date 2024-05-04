# Changelog

## [0.1.7](https://github.com/ngregrichardson/linxz/compare/v0.1.6...v0.1.7) (2024-05-04)


### Bug Fixes

* **deploy:** split release into two jobs to use different access tokens for PRs and releases ([61e976f](https://github.com/ngregrichardson/linxz/commit/61e976f69d349b8a99d4ed77e6648d7e089474c8))
* **deploy:** swap tokens between PR and release ([798b5e8](https://github.com/ngregrichardson/linxz/commit/798b5e82a3f44ee9fe0b6ca6a9f2d14fb4958cca))
* **deploy:** switch to using PAT to create releases to trigger future workflows properly ([afa96df](https://github.com/ngregrichardson/linxz/commit/afa96df4bfe6a91a5e09c7f1b9db0a05e78848c1))

## [0.1.6](https://github.com/ngregrichardson/linxz/compare/v0.1.5...v0.1.6) (2024-05-04)


### Bug Fixes

* **deploy:** change tag selector in docker.yml ([fd0f5e4](https://github.com/ngregrichardson/linxz/commit/fd0f5e45f64db59734c39dbaaa713b2cea5c7d50))

## [0.1.5](https://github.com/ngregrichardson/linxz/compare/v0.1.4...v0.1.5) (2024-05-04)


### Bug Fixes

* **deploy:** add extra release step to only run when tags are generated ([128ab81](https://github.com/ngregrichardson/linxz/commit/128ab811500dc9dbc55e657f6ec6b7f1ffea4825))

## [0.1.4](https://github.com/ngregrichardson/linxz/compare/v0.1.3...v0.1.4) (2024-05-04)


### Bug Fixes

* **deploy:** add latest and version tags to created images ([475fc37](https://github.com/ngregrichardson/linxz/commit/475fc37080331c353971f59f42aac5339b676435))

## [0.1.3](https://github.com/ngregrichardson/linxz/compare/v0.1.2...v0.1.3) (2024-05-04)


### Bug Fixes

* **deploy:** allow package writing when deploying running deploy workflow ([d4407cf](https://github.com/ngregrichardson/linxz/commit/d4407cf486868c0846a5143fd8034443164ce4e7))

## [0.1.2](https://github.com/ngregrichardson/linxz/compare/v0.1.1...v0.1.2) (2024-05-04)


### Bug Fixes

* **a11y:** improved accessibility and styling on mobile ([0154ef6](https://github.com/ngregrichardson/linxz/commit/0154ef654efee6ffde44e9db2d4679e0bbb89e13)), closes [#11](https://github.com/ngregrichardson/linxz/issues/11)
* **deploy:** remove public folder reference from Dockerfile ([784b1a2](https://github.com/ngregrichardson/linxz/commit/784b1a24beccec77459896659b5912831272e759))
* **deploy:** removed ports from base docker-compose.yml and added override and deployment configs ([6e48cc0](https://github.com/ngregrichardson/linxz/commit/6e48cc0c5e912be57c8ed08b288353ef84e1b349))
* **edge:** remove edge page rendering ([4c36bd3](https://github.com/ngregrichardson/linxz/commit/4c36bd391fb5502d5d4a06a7c9a4f2c4852eb8de))

## 0.1.1 (2024-05-04)


### Features

* **404:** added styled 404 page ([39d8c23](https://github.com/ngregrichardson/linxz/commit/39d8c23dedc5d87222fe28a2f65296f7ee23be85)), closes [#12](https://github.com/ngregrichardson/linxz/issues/12)
* **readme:** this is a test ([ba15db1](https://github.com/ngregrichardson/linxz/commit/ba15db12d9e20656fdcffd306711ca4336cd4258))
* **release:** add build and push workflow ([0a64286](https://github.com/ngregrichardson/linxz/commit/0a642866971c4a311216930b5319024096732590)), closes [#7](https://github.com/ngregrichardson/linxz/issues/7)


### Bug Fixes

* **deploy:** moved pages to use edge for Cloudflare deployment ([3ac4bad](https://github.com/ngregrichardson/linxz/commit/3ac4bad8b00a422ca6452fb0002aee5a5fc503f2))
* **edge:** migrate database on edge deployment ([f794d72](https://github.com/ngregrichardson/linxz/commit/f794d7224ef02a6d593814462dd2839451388ba1))
* **lockfile:** update lockfile ([773d83e](https://github.com/ngregrichardson/linxz/commit/773d83e562341ddb3d4bcea5f2dc4937797fd026))
* **startup:** apply migrations regardless of local or remote SQLite instance ([738ab58](https://github.com/ngregrichardson/linxz/commit/738ab58e4c07f0e73feb68d0812ab7d40c199234))


### Reverts

* **edge:** might give up a little on edge like Vercel ([80c92be](https://github.com/ngregrichardson/linxz/commit/80c92be74bf6a1aea0bd3e85761775ee09dcbde4))
