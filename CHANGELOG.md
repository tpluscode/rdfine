# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.3.2](https://github.com/tpluscode/rdfine/compare/v0.3.1...v0.3.2) (2020-01-31)


### Bug Fixes

* package missing the declaration files ([310a632](https://github.com/tpluscode/rdfine/commit/310a632d26db2b5974e28806b97141f396202824))

### [0.3.1](https://github.com/tpluscode/rdfine/compare/v0.3.0...v0.3.1) (2020-01-31)


### Bug Fixes

* export ResourceFactory from main ([d278638](https://github.com/tpluscode/rdfine/commit/d278638b3748734abecd1ba8b45624ef3f193c94))

## [0.3.0](https://github.com/tpluscode/rdfine/compare/v0.2.12...v0.3.0) (2020-01-31)


### ⚠ BREAKING CHANGES

* replaces _node property with _selfGraph

### Features

* named graph must be explicitly traversed in isolation ([902a7a6](https://github.com/tpluscode/rdfine/commit/902a7a64e70046ae955c0038ac3a4e6b1c936a40))


### Bug Fixes

* **decorator:** make generic annotation more accurate ([4707b0b](https://github.com/tpluscode/rdfine/commit/4707b0b60f3724430573ae645903839adb36fc2f))
* **factory:** depend on interface and not implementation ([0a67270](https://github.com/tpluscode/rdfine/commit/0a672700ae1b8855d6157900a419d1f1cbb10f5e))

### [0.2.12](https://github.com/tpluscode/rdfine/compare/v0.2.11...v0.2.12) (2020-01-30)


### Features

* ability to add multiple mixins at once ([9cb5595](https://github.com/tpluscode/rdfine/commit/9cb5595a045e5354115d7ac5e0153ae6ac84b116))
* allow setting initial value as clownface node ([82ca518](https://github.com/tpluscode/rdfine/commit/82ca518892fa4a290b36c7cd7ca14845167bdfd2))

### [0.2.11](https://github.com/tpluscode/rdfine/compare/v0.2.10...v0.2.11) (2020-01-27)


### Bug Fixes

* types property should be declared as interface ([141624c](https://github.com/tpluscode/rdfine/commit/141624ce544e4bad19a00154b7e67fcc4723eafc))

### [0.2.10](https://github.com/tpluscode/rdfine/compare/v0.2.9...v0.2.10) (2020-01-27)


### Bug Fixes

* initial property value does not work with array properties ([c400565](https://github.com/tpluscode/rdfine/commit/c400565d61d99a4daf296a24fc9bbe5b645e95eb))

### [0.2.9](https://github.com/tpluscode/rdfine/compare/v0.2.8...v0.2.9) (2020-01-26)


### Bug Fixes

* revisit the type declaration for ResourceIndexer ([34d57ca](https://github.com/tpluscode/rdfine/commit/34d57cae253923356a48ced40b9c9b7f2312df53))

### [0.2.8](https://github.com/tpluscode/rdfine/compare/v0.2.7...v0.2.8) (2020-01-23)


### Bug Fixes

* proxy indexer also returns rdf lists as array ([9cd04bd](https://github.com/tpluscode/rdfine/commit/9cd04bd3fa3d02ad6d531dd80c8704c1caf30a52))

### [0.2.7](https://github.com/tpluscode/rdfine/compare/v0.2.6...v0.2.7) (2020-01-22)


### Bug Fixes

* add resource indexer to RdfResource._create ([f1deedb](https://github.com/tpluscode/rdfine/commit/f1deedba70d7ea008f7ba8a57fcb52331980e330))

### [0.2.6](https://github.com/tpluscode/rdfine/compare/v0.2.5...v0.2.6) (2020-01-21)


### Features

* setter proxy ([e2f11fb](https://github.com/tpluscode/rdfine/commit/e2f11fbb335d0a9ac6c84b92f7bf4b6165aea230))

### [0.2.5](https://github.com/tpluscode/rdfine/compare/v0.2.4...v0.2.5) (2020-01-20)


### Features

* export indexer interface ([aea91a8](https://github.com/tpluscode/rdfine/commit/aea91a81028d9c43472daaf149dca91d9b0c2531))

### [0.2.4](https://github.com/tpluscode/rdfine/compare/v0.2.3...v0.2.4) (2020-01-20)


### Bug Fixes

* add generic type argument to mark base class ([e65e111](https://github.com/tpluscode/rdfine/commit/e65e1118dc78ee6ff00a605dcc46fbe8f7e288f6))

### [0.2.3](https://github.com/tpluscode/rdfine/compare/v0.2.2...v0.2.3) (2020-01-17)


### Features

* export a resource identitifier term type ([d13a4cd](https://github.com/tpluscode/rdfine/commit/d13a4cd7ae4fc35b55ebf0dff3ec0384e0fe60bf))

### [0.2.2](https://github.com/tpluscode/rdfine/compare/v0.2.1...v0.2.2) (2020-01-17)

### [0.2.1](https://github.com/tpluscode/rdfine/compare/v0.2.0...v0.2.1) (2020-01-16)


### Bug Fixes

* relax the typings of create method ([5c98a21](https://github.com/tpluscode/rdfine/commit/5c98a213dc0d2d0bc78a6ffd291dd5677ec7f1e3))

## [0.2.0](https://github.com/tpluscode/rdfine/compare/v0.1.4...v0.2.0) (2020-01-15)


### ⚠ BREAKING CHANGES

* decorator's `array: boolean` changed to `values: 'array' | 'list' | undefined`

### Features

* allow setting RDF arrays ([7d83311](https://github.com/tpluscode/rdfine/commit/7d833110273f7966973400792df38fc0037d51df))


### Bug Fixes

* more informative getter/setter exceptions ([621c6c9](https://github.com/tpluscode/rdfine/commit/621c6c910b5191624c8301cf234eb4e21492c528))

### [0.1.4](https://github.com/tpluscode/rdfine/compare/v0.1.3...v0.1.4) (2020-01-13)


### Features

* equals method to compare resource instances ([#19](https://github.com/tpluscode/rdfine/issues/19)) ([421c5a4](https://github.com/tpluscode/rdfine/commit/421c5a4849e6c3984be26166372419148d3d9807))
* instance method to create resources ([bab524d](https://github.com/tpluscode/rdfine/commit/bab524d638473034588240f6056437bc2d560140))


### Bug Fixes

* proxy returns array for single object ([dd40473](https://github.com/tpluscode/rdfine/commit/dd404738ff6a50e3846de1a90b57e5c76a79b41b))

### [0.1.3](https://github.com/tpluscode/rdfine/compare/v0.1.2...v0.1.3) (2020-01-11)


### Features

* wrap object in proxy to allow arbitrary property access ([3a08b8c](https://github.com/tpluscode/rdfine/commit/3a08b8c498e5503f927430f783827ecd065ebacb))

### [0.1.2](https://github.com/tpluscode/rdfine/compare/v0.1.1...v0.1.2) (2020-01-09)


### Features

* read-only support for rdf lists ([1849150](https://github.com/tpluscode/rdfine/commit/1849150f659a62e125d351da9613ba815ab4f890))


### Bug Fixes

* decorators fail to apply with babel ([dcd0ca0](https://github.com/tpluscode/rdfine/commit/dcd0ca0c9386d2ccc4ea03fc6d7b56aec0027fa3))
* strict property throws when initialized declaratively ([a7088ff](https://github.com/tpluscode/rdfine/commit/a7088ff33df3e6620374743adc0c6f06fc99124c))

### [0.1.1](https://github.com/tpluscode/rdfine/compare/v0.1.0...v0.1.1) (2020-01-08)


### Features

* added TypeCollection class and resource prop ([60a10d6](https://github.com/tpluscode/rdfine/commit/60a10d67fc39e6e47a1dcc09cea944858ec36c0f))

## [0.1.0](https://github.com/tpluscode/rdfine/compare/v0.0.2...v0.1.0) (2019-12-30)


### ⚠ BREAKING CHANGES

* a factory instance must exist on the base class

### Features

* allow decorated base class override ([6628435](https://github.com/tpluscode/rdfine/commit/662843515b6d111089e319f6d4dbc8f58fec428c))
* basic support for numeric literals ([34c6f2f](https://github.com/tpluscode/rdfine/commit/34c6f2fe4d64af725f2bf194790258a6daaf59be))
* dafault property value ([c1e9c57](https://github.com/tpluscode/rdfine/commit/c1e9c57e6c5cab629cbb1942572728ca0525feca))
* declare initial prop value as factory function ([4849b98](https://github.com/tpluscode/rdfine/commit/4849b98e3e86d3b961c853ed7f49121ae26a326b))
* strict properties ([d4fe5c1](https://github.com/tpluscode/rdfine/commit/d4fe5c1518ebed6c753b72e9ecbd80ef49ea7cbc))


* remove singleton factory ([723c504](https://github.com/tpluscode/rdfine/commit/723c504a006a6594c67baf1e37d511373307d2c2))

### [0.0.2](https://github.com/tpluscode/rdfine/compare/v0.0.1...v0.0.2) (2019-12-23)

### 0.0.1 (2019-12-22)


### Features

* annotating properties to use namespaces ([baf7493](https://github.com/tpluscode/rdfine/commit/baf7493ac3781d4564ccfc738274b83ffb6bfb70))
* implement resource factory as singleton ([bc14c7d](https://github.com/tpluscode/rdfine/commit/bc14c7df3d78cca55c7e40bb544e6711f1362132))
* postel law - set terms directly ([cc88849](https://github.com/tpluscode/rdfine/commit/cc88849a0ba0adbcf9d49f5c4d0a030d79b6004c))
* setting and unsetting resource relations ([05ff089](https://github.com/tpluscode/rdfine/commit/05ff08959e2339cd3ddf0bd6e939197036f1c6c7))
* setting string and boolean literals ([71ed349](https://github.com/tpluscode/rdfine/commit/71ed3491c93f9927be4518828851bd21fa03d6a3))
* setting string and boolean literals ([386a940](https://github.com/tpluscode/rdfine/commit/386a94063abf12904180b5aee353095e82b718e9))


### Bug Fixes

* setting arrays ([700b169](https://github.com/tpluscode/rdfine/commit/700b16951eeb0e4ec235acf485acf80b9f451fc7))
* setting longer paths ([4a2deb4](https://github.com/tpluscode/rdfine/commit/4a2deb4867a12c3f950e290a1769740c94df4170))
