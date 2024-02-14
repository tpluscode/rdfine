# @rdfine/foaf

## 2.0.5

### Patch Changes

- 9b28f347: Updated dependencies to remove `rdf-js` references in compiled output
- Updated dependencies [9b28f347]
  - @tpluscode/rdfine@0.7.7
  - @rdfine/skos@0.3.5
  - @rdfine/wgs@0.3.5

## 2.0.4

### Patch Changes

- c8d796c4: Relax rdfine dependency
- Updated dependencies [c8d796c4]
  - @rdfine/skos@0.3.4
  - @rdfine/wgs@0.3.4

## 2.0.3

### Patch Changes

- 9a838dec: Missing `Factory.js` in package
- 9a838dec: Added changelog to package
- Updated dependencies [9a838dec]
- Updated dependencies [9a838dec]
  - @rdfine/skos@0.3.3
  - @rdfine/wgs@0.3.3

## 2.0.2

### Patch Changes

- 3c90fafa: Use mapped type to declare vocabulary factory
- Updated dependencies [3c90fafa]
  - @tpluscode/rdfine@0.7.3
  - @rdfine/skos@0.3.2
  - @rdfine/wgs@0.3.2

## 2.0.1

### Patch Changes

- 0ab38e3b: Factory was missing from package and exports
- Updated dependencies [0ab38e3b]
  - @rdfine/skos@0.3.1
  - @rdfine/wgs@0.3.1

## 2.0.0

### Minor Changes

- 9d49a7b2: Remove all `Partial` from mixin types to simplify extending classes

### Patch Changes

- Updated dependencies [fe473333]
- Updated dependencies [9d49a7b2]
  - @tpluscode/rdfine@0.7.0
  - @rdfine/skos@0.3.0
  - @rdfine/wgs@0.3.0

## 1.0.0

### Minor Changes

- 6cee88c8: Package is not ESM-only

### Patch Changes

- Updated dependencies [6cee88c8]
  - @tpluscode/rdfine@0.6.0
  - @rdfine/skos@0.2.0
  - @rdfine/wgs@0.2.0

## 0.1.9

### Patch Changes

- 4ce19cbe: Introduce a more stable order of members, exports and imports
- f7cfefff: Update `@tpluscode/rdf-ns-builders` to v2
- Updated dependencies [4ce19cbe]
- Updated dependencies [f7cfefff]
  - @rdfine/wgs@0.1.7
  - @tpluscode/rdfine@0.5.39
  - @rdfine/skos@0.1.6

## 0.1.8

### Patch Changes

- 5e2681a4: Update @tpluscode/rdfine
- Updated dependencies [5e2681a4]
  - @rdfine/skos@0.1.5
  - @rdfine/wgs@0.1.6

## 0.1.7

### Patch Changes

- d6f77ced: `fromPointer` methods should typed as `Factory<T>`
- Updated dependencies [d6f77ced]
  - @rdfine/skos@0.1.4
  - @rdfine/wgs@0.1.5

## 0.1.6

### Patch Changes

- 45a4be9c: Broken imports or exports of extension modules

## 0.1.5

### Patch Changes

- 9dce881b: Remove cycled dependency on WGS
- Updated dependencies [247137f2]
  - @tpluscode/rdfine@0.5.29

## 0.1.4

### Patch Changes

- a63ec35a: Update `@tpluscode/rdf-ns-builders` and typescript RDF/JS types
- Updated dependencies [a63ec35a]
  - @tpluscode/rdfine@0.5.27
  - @rdfine/skos@0.1.3
  - @rdfine/wgs@0.1.4

## 0.1.3

### Patch Changes

- 7cdc4e04: type-only export of interfaces
- Updated dependencies [7cdc4e04]
  - @rdfine/skos@0.1.2
  - @rdfine/wgs@0.1.3

## 0.1.2

### Patch Changes

- 04d8af79: Missing exports of extension modules
- Updated dependencies [04d8af79]
  - @rdfine/skos@0.1.1
  - @rdfine/wgs@0.1.2

## 0.1.1

### Patch Changes

- c341d76b: Add a return type to mixin functions
- 60a925e4: Generating mixins extending other vocabs
- 0d82ae01: Mixins classes implement partial interface
- e2d18bb7: Add factory method to mixin modules
- Updated dependencies [59396a54]
- Updated dependencies [c341d76b]
- Updated dependencies [c7a1047a]
- Updated dependencies [60a925e4]
- Updated dependencies [0d82ae01]
- Updated dependencies [e2d18bb7]
  - @rdfine/skos@0.1.0
  - @rdfine/wgs@0.1.1
  - @tpluscode/rdfine@0.5.17

## 0.1.0

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
  - @rdfine/wgs@0.1.0

## 0.0.1

### Patch Changes

- 7bbcc41: Created new packages for DOAP, FOAF, SIOC and WGS
- Updated dependencies [7bbcc41]
  - @rdfine/wgs@0.0.1
