import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';

export interface DatatypeProperty extends Rdf.Property, RdfResource {
}

export function DatatypePropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DatatypePropertyClass extends RdfPropertyMixin(Resource) implements DatatypeProperty {
  }
  return DatatypePropertyClass
}

class DatatypePropertyImpl extends DatatypePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DatatypeProperty>) {
    super(arg, init)
    this.types.add(owl.DatatypeProperty)
  }
}
DatatypePropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.DatatypeProperty)
DatatypePropertyMixin.Class = DatatypePropertyImpl
