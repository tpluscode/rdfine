# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.3.2](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.3.1...@rdfine/generator@0.3.2) (2020-07-07)


### Features

* comparing resources also with nodes and pointers ([bfaf2dd](https://github.com/tpluscode/rdfine/commit/bfaf2ddec346cd97df2223284b8518f9dbc4b167))





## [0.3.1](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.3.0...@rdfine/generator@0.3.1) (2020-07-03)


### Bug Fixes

* **generator:** import mixins only from index ([5470637](https://github.com/tpluscode/rdfine/commit/5470637ee51480bafa76e28d92a92a169d86d180))





# [0.3.0](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.2.5...@rdfine/generator@0.3.0) (2020-07-03)


### Bug Fixes

* **resource:** fix bnode id equality ([c13c821](https://github.com/tpluscode/rdfine/commit/c13c821e887c80b39addbde78043a942870d83cb))


### Features

* rename dependencies to bundles ([d67afbe](https://github.com/tpluscode/rdfine/commit/d67afbe596bc1d91c1a030cb233bb44ca04a0fc7))


### BREAKING CHANGES

* imports need to be updated





## [0.2.5](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.2.4...@rdfine/generator@0.2.5) (2020-06-08)

**Note:** Version bump only for package @rdfine/generator





## [0.2.4](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.2.3...@rdfine/generator@0.2.4) (2020-05-05)


### Features

* generate mixins for specific rdf type to boost perf ([06bf552](https://github.com/tpluscode/rdfine/commit/06bf552f50f516a62f7c2bb05b9f17beb2159aee))





## [0.2.3](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.2.2...@rdfine/generator@0.2.3) (2020-04-29)


### Bug Fixes

* **generator:** avoid duplicate mixin export in dependency modules ([30dcf20](https://github.com/tpluscode/rdfine/commit/30dcf20b903c5f853f47a87d0c9f78e60e0f3449))
* **generator:** interface annotated on decorators instead of class ([c64ebdb](https://github.com/tpluscode/rdfine/commit/c64ebdb3694697d8aaedfd470c98a148dab21334))





## [0.2.2](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.2.1...@rdfine/generator@0.2.2) (2020-04-29)


### Bug Fixes

* **generator:** do not generate default exports for mixins ([840a302](https://github.com/tpluscode/rdfine/commit/840a30288963744c6340123d4e00664c7c5741e5))


### Features

* **generator:** generate dependency modules for every mixin ([08976d0](https://github.com/tpluscode/rdfine/commit/08976d0686e2f9fb7293571fb279422596327733))





## [0.2.1](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.2.0...@rdfine/generator@0.2.1) (2020-04-18)


### Bug Fixes

* export namespace builder from shared package ([f341521](https://github.com/tpluscode/rdfine/commit/f341521543d2fda91ef6017633ba546bf88ebe0c))





# [0.2.0](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.1.1...@rdfine/generator@0.2.0) (2020-04-18)


### Bug Fixes

* **generator:** avoid conflict with rdf as vocabulary package ([090aa5e](https://github.com/tpluscode/rdfine/commit/090aa5e3789bf9eac745ed2b609320f677ed32b0))


### Features

* **generator:** overriding property value to generate array/list getters ([394581b](https://github.com/tpluscode/rdfine/commit/394581b639e770b032ea4bf767ba37c06d47d693))





## [0.1.1](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.1.0...@rdfine/generator@0.1.1) (2020-04-15)

**Note:** Version bump only for package @rdfine/generator





# [0.1.0](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.0.2...@rdfine/generator@0.1.0) (2020-04-01)


### Bug Fixes

* use same method to slugify dimension table id ([9d9205f](https://github.com/tpluscode/rdfine/commit/9d9205f))
* **generator:** do not require namespace for common namespaces ([d5d68ed](https://github.com/tpluscode/rdfine/commit/d5d68ed))


### Features

* **build:** only package es modules and esm node export ([4d5fa5b](https://github.com/tpluscode/rdfine/commit/4d5fa5b))
* **generator:** add mixin cast to rdf:range properties ([fa4e188](https://github.com/tpluscode/rdfine/commit/fa4e188))


### BREAKING CHANGES

* **build:** some exports have been moved





## [0.0.2](https://github.com/tpluscode/rdfine/compare/@rdfine/generator@0.0.1...@rdfine/generator@0.0.2) (2020-03-25)


### Bug Fixes

* **core:** simplify resource initialization ([cfc6731](https://github.com/tpluscode/rdfine/commit/cfc673171c0b969b52b890d375aac093a4024093))





## 0.0.1 (2020-03-25)


### Bug Fixes

* **core:** plain intialization impossible with union type properties ([a545e48](https://github.com/tpluscode/rdfine/commit/a545e485b1827df15788ffacfe6907b408bd5de1))
* **generator:** always enable warn and error loggers ([1a5999d](https://github.com/tpluscode/rdfine/commit/1a5999de7ead4ea3f2905f4ce58842ff67d8c363))
* **generator:** generate type-only imports of rdf-js ([30c40d1](https://github.com/tpluscode/rdfine/commit/30c40d145c54cf9b1f72cc9c594d695e8222eee1))
* **schema:** schema:URL should be treated as rdfResource ([cd037ac](https://github.com/tpluscode/rdfine/commit/cd037ac51801bb2ce183f8337631df46aea5d1de))


### Features

* **generator:** create classes which can be easily initialized ([3fb0900](https://github.com/tpluscode/rdfine/commit/3fb090087cc7feba2c1cc258bb3db46a52f363d5))
* **generator:** discover properties which use owl:unionOf ([70c3714](https://github.com/tpluscode/rdfine/commit/70c37145589ccc8ecd7eed44a0b99254d437f417))
* **generator:** first version of generated schema.org ([1759e17](https://github.com/tpluscode/rdfine/commit/1759e17eba36930bfeeb17b693e823b830495350))
