import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import ObjectPropertyMixin from './ObjectProperty';

export interface IrreflexiveProperty extends Owl.ObjectProperty, RdfResource {
}

export default function IrreflexivePropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class IrreflexivePropertyClass extends ObjectPropertyMixin(Resource) implements IrreflexiveProperty {
  }
  return IrreflexivePropertyClass
}

class IrreflexivePropertyImpl extends IrreflexivePropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IrreflexiveProperty>) {
    super(arg, init)
    this.types.add(owl.IrreflexiveProperty)
  }
}
IrreflexivePropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.IrreflexiveProperty)
IrreflexivePropertyMixin.Class = IrreflexivePropertyImpl
