import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import FoodEstablishmentMixin from './FoodEstablishment';

export interface BarOrPub extends Schema.FoodEstablishment, RdfResource {
}

export default function BarOrPubMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BarOrPubClass extends FoodEstablishmentMixin(Resource) implements BarOrPub {
  }
  return BarOrPubClass
}

class BarOrPubImpl extends BarOrPubMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BarOrPub>) {
    super(arg)
    this.types.add(schema.BarOrPub)
    initializeProperties(this, init)
  }
}
BarOrPubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BarOrPub)
BarOrPubMixin.Class = BarOrPubImpl
