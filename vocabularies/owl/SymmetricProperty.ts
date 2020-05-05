import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import { ObjectPropertyMixin } from './ObjectProperty';

export interface SymmetricProperty extends Owl.ObjectProperty, RdfResource {
}

export function SymmetricPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class SymmetricPropertyClass extends ObjectPropertyMixin(Resource) implements SymmetricProperty {
  }
  return SymmetricPropertyClass
}

class SymmetricPropertyImpl extends SymmetricPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SymmetricProperty>) {
    super(arg, init)
    this.types.add(owl.SymmetricProperty)
  }

  static readonly __mixins: Mixin[] = [SymmetricPropertyMixin, ObjectPropertyMixin];
}
SymmetricPropertyMixin.appliesTo = owl.SymmetricProperty
SymmetricPropertyMixin.Class = SymmetricPropertyImpl
