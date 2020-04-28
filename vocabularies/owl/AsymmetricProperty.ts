import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import ObjectPropertyMixin from './ObjectProperty';

export interface AsymmetricProperty extends Owl.ObjectProperty, RdfResource {
}

export default function AsymmetricPropertyMixin<Base extends Constructor>(Resource: Base) {
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
}
AsymmetricPropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.AsymmetricProperty)
AsymmetricPropertyMixin.Class = AsymmetricPropertyImpl
