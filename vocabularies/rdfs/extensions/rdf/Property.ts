import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdf } from '@tpluscode/rdf-ns-builders';
import { rdfs } from '../../lib/namespace';
import type * as Rdfs from '../..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

interface PropertyEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  domain: Array<Rdfs.Class<D>>;
  range: Array<Rdfs.Class<D>>;
  subPropertyOf: Array<Rdf.Property<D>>;
}

declare module '@rdfine/rdf/lib/Property' {
  interface Property<D extends RDF.DatasetCore> extends PropertyEx<D> {
  }
}

export function RdfPropertyMixinEx<Base extends ExtendingConstructor<Rdf.Property, PropertyEx>>(Resource: Base): Constructor<PropertyEx & RdfResourceCore> & Base {
  @namespace(rdfs)
  class Impl extends Resource implements PropertyEx {
    @property.resource({ values: 'array', implicitTypes: [rdfs.Class] })
    domain!: Array<Rdfs.Class>;
    @property.resource({ values: 'array', implicitTypes: [rdfs.Class] })
    range!: Array<Rdfs.Class>;
    @property.resource({ values: 'array', as: [RdfPropertyMixin] })
    subPropertyOf!: Array<Rdf.Property>;
  }
  return Impl
}
RdfPropertyMixinEx.appliesTo = rdf.Property
