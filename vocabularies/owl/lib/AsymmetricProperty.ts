import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import { ObjectPropertyMixin } from './ObjectProperty';

export interface AsymmetricProperty<ID extends ResourceNode = ResourceNode> extends Owl.ObjectProperty<ID>, RdfResource<ID> {
}

export function AsymmetricPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class AsymmetricPropertyClass extends ObjectPropertyMixin(Resource) implements AsymmetricProperty {
  }
  return AsymmetricPropertyClass
}

class AsymmetricPropertyImpl extends AsymmetricPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AsymmetricProperty>) {
    super(arg, init)
    this.types.add(owl.AsymmetricProperty)
  }

  static readonly __mixins: Mixin[] = [AsymmetricPropertyMixin, ObjectPropertyMixin];
}
AsymmetricPropertyMixin.appliesTo = owl.AsymmetricProperty
AsymmetricPropertyMixin.Class = AsymmetricPropertyImpl
