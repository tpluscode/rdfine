import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdf from '@rdfine/rdf';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';

export interface DeprecatedProperty extends Rdf.Property, RdfResource {
}

export function DeprecatedPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DeprecatedPropertyClass extends RdfPropertyMixin(Resource) implements DeprecatedProperty {
  }
  return DeprecatedPropertyClass
}

class DeprecatedPropertyImpl extends DeprecatedPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeprecatedProperty>) {
    super(arg, init)
    this.types.add(owl.DeprecatedProperty)
  }
}
DeprecatedPropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.DeprecatedProperty)
DeprecatedPropertyMixin.Class = DeprecatedPropertyImpl
