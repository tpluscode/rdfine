# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.1.3](https://github.com/tpluscode/rdfine/compare/@rdfine/csvw@0.1.2...@rdfine/csvw@0.1.3) (2020-04-18)

**Note:** Version bump only for package @rdfine/csvw





## [0.1.2](https://github.com/tpluscode/rdfine/compare/@rdfine/csvw@0.1.1...@rdfine/csvw@0.1.2) (2020-04-15)

**Note:** Version bump only for package @rdfine/csvw





## [0.1.1](https://github.com/tpluscode/rdfine/compare/@rdfine/csvw@0.1.0...@rdfine/csvw@0.1.1) (2020-04-15)


### Bug Fixes

* subject from all graph did not work ([9d3497b](https://github.com/tpluscode/rdfine/commit/9d3497bdfb88abd907f36a3d701d847eaf9a688c))





# [0.1.0](https://github.com/tpluscode/rdfine/compare/@rdfine/csvw@0.0.2...@rdfine/csvw@0.1.0) (2020-04-01)


### Bug Fixes

* **vocabularies:** missing @rdfjs/namespace dependency ([a1a8bad](https://github.com/tpluscode/rdfine/commit/a1a8bad))
* use same method to slugify dimension table id ([9d9205f](https://github.com/tpluscode/rdfine/commit/9d9205f))
* **generator:** do not require namespace for common namespaces ([d5d68ed](https://github.com/tpluscode/rdfine/commit/d5d68ed))


### Features

* **build:** only package es modules and esm node export ([4d5fa5b](https://github.com/tpluscode/rdfine/commit/4d5fa5b))
* **generator:** add mixin cast to rdf:range properties ([fa4e188](https://github.com/tpluscode/rdfine/commit/fa4e188))


### BREAKING CHANGES

* **build:** some exports have been moved





## [0.0.2](https://github.com/tpluscode/rdfine/compare/@rdfine/csvw@0.0.1...@rdfine/csvw@0.0.2) (2020-03-25)


### Bug Fixes

* **core:** simplify resource initialization ([cfc6731](https://github.com/tpluscode/rdfine/commit/cfc673171c0b969b52b890d375aac093a4024093))





## 0.0.1 (2020-03-25)


### Bug Fixes

* **core:** plain intialization impossible with union type properties ([a545e48](https://github.com/tpluscode/rdfine/commit/a545e485b1827df15788ffacfe6907b408bd5de1))
* **generator:** generate type-only imports of rdf-js ([30c40d1](https://github.com/tpluscode/rdfine/commit/30c40d145c54cf9b1f72cc9c594d695e8222eee1))
* **schema:** schema:URL should be treated as rdfResource ([cd037ac](https://github.com/tpluscode/rdfine/commit/cd037ac51801bb2ce183f8337631df46aea5d1de))


### Features

* **generator:** create classes which can be easily initialized ([3fb0900](https://github.com/tpluscode/rdfine/commit/3fb090087cc7feba2c1cc258bb3db46a52f363d5))
* handle deep initialization from plain object ([0fd30af](https://github.com/tpluscode/rdfine/commit/0fd30af410d7cc0462ce78868da6f383c21305f1))
* **csvw:** generate first version of csvw vocabulary ([12551fc](https://github.com/tpluscode/rdfine/commit/12551fcc7430137a406ff8292ddae062bf3eab34))