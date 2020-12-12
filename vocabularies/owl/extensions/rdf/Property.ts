import { ExtendingConstructor, Constructor, namespace, property } from '@tpluscode/rdfine';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { rdf } from '@tpluscode/rdf-ns-builders';
import { owl } from '../../lib/namespace';
import type * as Owl from '../..';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

interface PropertyEx<D extends RDF.DatasetCore = RDF.DatasetCore> {
  equivalentProperty: Array<Rdf.Property<D>>;
  propertyDisjointWith: Array<Rdf.Property<D>>;
}

declare module '@rdfine/rdf/lib/Property' {
  interface Property<D extends RDF.DatasetCore> extends PropertyEx<D> {
  }
}

export function PropertyMixinEx<Base extends ExtendingConstructor<Rdf.Property, PropertyEx>>(Resource: Base): Constructor<PropertyEx & RdfResourceCore> & Base {
  @namespace(owl)
  class Impl extends Resource implements PropertyEx {
    @property.resource({ values: 'array', as: [RdfPropertyMixin] })
    equivalentProperty!: Array<Rdf.Property>;
    @property.resource({ values: 'array', as: [RdfPropertyMixin] })
    propertyDisjointWith!: Array<Rdf.Property>;
  }
  return Impl
}
PropertyMixinEx.appliesTo = rdf.Property
