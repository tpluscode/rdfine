# Change Log

## 0.4.3

### Patch Changes

- 7cdc4e04: type-only export of interfaces
- Updated dependencies [7cdc4e04]
  - @rdfine/rdf@0.5.3
  - @rdfine/rdfs@0.6.3

## 0.4.2

### Patch Changes

- 04d8af79: Missing exports of extension modules
- Updated dependencies [04d8af79]
  - @rdfine/rdf@0.5.2
  - @rdfine/rdfs@0.6.2

## 0.4.1

### Patch Changes

- c341d76b: Add a return type to mixin functions
- 60a925e4: Generating mixins extending other vocabs
- 0d82ae01: Mixins classes implement partial interface
- e2d18bb7: Add factory method to mixin modules
- Updated dependencies [c341d76b]
- Updated dependencies [60a925e4]
- Updated dependencies [0d82ae01]
- Updated dependencies [e2d18bb7]
  - @rdfine/rdf@0.5.1
  - @rdfine/rdfs@0.6.1
  - @tpluscode/rdfine@0.5.17

## 0.4.0

### Minor Changes

- 0db486f2: Move all modules into `lib`

  This will allow selective imports in node.

  Also remove any star imports between packages

### Patch Changes

- Updated dependencies [a4e39c35]
- Updated dependencies [07d94285]
- Updated dependencies [0db486f2]
- Updated dependencies [69eb2666]
  - @tpluscode/rdfine@0.5.16
  - @rdfine/rdf@0.5.0
  - @rdfine/rdfs@0.6.0

## 0.3.2

### Patch Changes

- fc82303: Update vocabulary

## 0.3.1

### Patch Changes

- d69277a: Generated resource types should all have generic dataset argument
- Updated dependencies [150977e]
- Updated dependencies [d69277a]
- Updated dependencies [9986b77]
- Updated dependencies [fecafe1]
  - @rdfine/rdfs@0.5.0
  - @tpluscode/rdfine@0.5.7
  - @rdfine/rdf@0.4.1

## 0.3.0

### Minor Changes

- 57dfa37: All non-array properties are generated as possibly undefined

### Patch Changes

- Updated dependencies [57dfa37]
  - @rdfine/rdf@0.4.0
  - @rdfine/rdfs@0.4.0

## 0.2.10

### Patch Changes

- 7438e0b: Update to @types/rdf-js v4
- Updated dependencies [7438e0b]
  - @tpluscode/rdfine@0.5.5
  - @rdfine/rdf@0.3.10
  - @rdfine/rdfs@0.3.10

## 0.2.9

### Patch Changes

- 1f452df: Added export definition for namespace module
- Updated dependencies [1f452df]
- Updated dependencies [98d991a]
  - @rdfine/rdf@0.3.9
  - @rdfine/rdfs@0.3.9
  - @tpluscode/rdfine@0.5.0

## 0.2.8

### Patch Changes

- 5316ea6: Remove @rdfjs/namespace from dependencies
- Updated dependencies [5316ea6]
  - @tpluscode/rdfine@0.4.23
  - @rdfine/rdf@0.3.8
  - @rdfine/rdfs@0.3.8

## [0.2.7](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.2.6...@rdfine/owl@0.2.7) (2020-08-07)

**Note:** Version bump only for package @rdfine/owl

## [0.2.6](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.2.5...@rdfine/owl@0.2.6) (2020-08-06)

**Note:** Version bump only for package @rdfine/owl

## [0.2.5](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.2.4...@rdfine/owl@0.2.5) (2020-07-07)

**Note:** Version bump only for package @rdfine/owl

## [0.2.4](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.2.3...@rdfine/owl@0.2.4) (2020-07-07)

**Note:** Version bump only for package @rdfine/owl

## [0.2.3](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.2.2...@rdfine/owl@0.2.3) (2020-07-06)

### Bug Fixes

- **build:** exports field did not work in newer node ([531da7b](https://github.com/tpluscode/rdfine/commit/531da7bd23faa2ad5b1bacec1c5a76e44d6190ab))
- **build:** typo in main field ([70f15dc](https://github.com/tpluscode/rdfine/commit/70f15dcacf45694b5490558a49dbb04b014b323f))

## [0.2.2](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.2.1...@rdfine/owl@0.2.2) (2020-07-05)

### Bug Fixes

- **build:** bundles partially missing in package ([e8b9816](https://github.com/tpluscode/rdfine/commit/e8b9816cc583f1f756a649107bdcd3fabebb5880))

## [0.2.1](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.2.0...@rdfine/owl@0.2.1) (2020-07-03)

### Bug Fixes

- **generator:** import mixins only from index ([5470637](https://github.com/tpluscode/rdfine/commit/5470637ee51480bafa76e28d92a92a169d86d180))

# [0.2.0](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.1.4...@rdfine/owl@0.2.0) (2020-07-03)

### Features

- rename dependencies to bundles ([d67afbe](https://github.com/tpluscode/rdfine/commit/d67afbe596bc1d91c1a030cb233bb44ca04a0fc7))

### BREAKING CHANGES

- imports need to be updated

## [0.1.4](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.1.3...@rdfine/owl@0.1.4) (2020-06-08)

**Note:** Version bump only for package @rdfine/owl

## [0.1.3](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.1.2...@rdfine/owl@0.1.3) (2020-05-06)

**Note:** Version bump only for package @rdfine/owl

## [0.1.2](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.1.1...@rdfine/owl@0.1.2) (2020-05-05)

### Features

- generate mixins for specific rdf type to boost perf ([06bf552](https://github.com/tpluscode/rdfine/commit/06bf552f50f516a62f7c2bb05b9f17beb2159aee))

## [0.1.1](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.1.0...@rdfine/owl@0.1.1) (2020-04-29)

**Note:** Version bump only for package @rdfine/owl

# [0.1.0](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.0.5...@rdfine/owl@0.1.0) (2020-04-29)

### Features

- **vocabs:** re-generated vocabularies to latest structure ([69b526e](https://github.com/tpluscode/rdfine/commit/69b526e69e7094ec7563f69525c60822ae1572b2))

## [0.0.5](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.0.4...@rdfine/owl@0.0.5) (2020-04-29)

**Note:** Version bump only for package @rdfine/owl

## [0.0.4](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.0.3...@rdfine/owl@0.0.4) (2020-04-28)

**Note:** Version bump only for package @rdfine/owl

## [0.0.3](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.0.2...@rdfine/owl@0.0.3) (2020-04-28)

**Note:** Version bump only for package @rdfine/owl

## [0.0.2](https://github.com/tpluscode/rdfine/compare/@rdfine/owl@0.0.1...@rdfine/owl@0.0.2) (2020-04-28)

**Note:** Version bump only for package @rdfine/owl

## 0.0.1 (2020-04-28)

### Features

- **owl:** first generation ([64e6388](https://github.com/tpluscode/rdfine/commit/64e6388b3a9aed9fe91f54fb21879f76d7e3169c))
