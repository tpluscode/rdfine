> ## RDFine /rɪdɪˈfaɪn/
> ### RDF/JS idiomatic, native, enjoyable

This is a monorepo containing JavaScript libraries which make it much easier to work with RDF using idiomatic JS object model yet at the same time keeping a close relation to the [RDF/JS data model specifications](https://rdf.js.org/data-model-spec/)

## Packages

### [@tpluscode/rdfine](packages/core)

Core library to define the JavaScript object model for RDF classes and properties

### Generated model packages for selected vocabularies:

* [@rdfine/csvw](vocabularies/csvw) - [Metadata Vocabulary for Tabular Data](https://www.w3.org/TR/tabular-metadata/)
* [@rdfine/schema](vocabularies/csvw) - http://schema.org/

### [@rdfine/generator](packages/generator)

Used to generate the above `@rdfine/*` packages.
