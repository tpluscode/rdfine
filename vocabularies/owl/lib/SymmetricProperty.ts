import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import { ObjectPropertyMixin } from './ObjectProperty';

export interface SymmetricProperty<ID extends ResourceNode = ResourceNode> extends Owl.ObjectProperty<ID>, RdfResource<ID> {
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
