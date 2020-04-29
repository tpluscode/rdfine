import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';

export interface FunctionalProperty extends Rdf.Property, RdfResource {
}

export function FunctionalPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class FunctionalPropertyClass extends RdfPropertyMixin(Resource) implements FunctionalProperty {
  }
  return FunctionalPropertyClass
}

class FunctionalPropertyImpl extends FunctionalPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FunctionalProperty>) {
    super(arg, init)
    this.types.add(owl.FunctionalProperty)
  }
}
FunctionalPropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.FunctionalProperty)
FunctionalPropertyMixin.Class = FunctionalPropertyImpl
