import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdf from '@rdfine/rdf';

export interface DeprecatedProperty extends Rdf.Property, RdfResource {
}

export function DeprecatedPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DeprecatedPropertyClass extends Rdf.PropertyMixin(Resource) implements DeprecatedProperty {
  }
  return DeprecatedPropertyClass
}

class DeprecatedPropertyImpl extends DeprecatedPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeprecatedProperty>) {
    super(arg, init)
    this.types.add(owl.DeprecatedProperty)
  }

  static readonly __mixins: Mixin[] = [DeprecatedPropertyMixin, Rdf.PropertyMixin];
}
DeprecatedPropertyMixin.appliesTo = owl.DeprecatedProperty
DeprecatedPropertyMixin.Class = DeprecatedPropertyImpl
