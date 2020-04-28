import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import ObjectPropertyMixin from './ObjectProperty';

export interface InverseFunctionalProperty extends Owl.ObjectProperty, RdfResource {
}

export default function InverseFunctionalPropertyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class InverseFunctionalPropertyClass extends ObjectPropertyMixin(Resource) implements InverseFunctionalProperty {
  }
  return InverseFunctionalPropertyClass
}

class InverseFunctionalPropertyImpl extends InverseFunctionalPropertyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InverseFunctionalProperty>) {
    super(arg, init)
    this.types.add(owl.InverseFunctionalProperty)
  }
}
InverseFunctionalPropertyMixin.shouldApply = (r: RdfResource) => r.types.has(owl.InverseFunctionalProperty)
InverseFunctionalPropertyMixin.Class = InverseFunctionalPropertyImpl
