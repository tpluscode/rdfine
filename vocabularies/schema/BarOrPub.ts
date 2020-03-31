import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BarOrPub>) {
    super(arg, init)
    this.types.add(schema.BarOrPub)
  }
}
BarOrPubMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BarOrPub)
BarOrPubMixin.Class = BarOrPubImpl
