import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { AccommodationMixin } from './Accommodation';

export interface House extends Schema.Accommodation, RdfResource {
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
}

export function HouseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HouseClass extends AccommodationMixin(Resource) implements House {
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral!: number;
  }
  return HouseClass
}

class HouseImpl extends HouseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<House>) {
    super(arg, init)
    this.types.add(schema.House)
  }
}
HouseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.House)
HouseMixin.Class = HouseImpl
