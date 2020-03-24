import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AccommodationMixin from './Accommodation';

export interface House extends Schema.Accommodation, RdfResource {
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
}

export default function HouseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HouseClass extends AccommodationMixin(Resource) implements House {
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.numberOfRooms })
    numberOfRoomsLiteral!: number;
  }
  return HouseClass
}

class HouseImpl extends HouseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<House>) {
    super(arg)
    this.types.add(schema.House)
    initializeProperties(this, init)
  }
}
HouseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.House)
HouseMixin.Class = HouseImpl
