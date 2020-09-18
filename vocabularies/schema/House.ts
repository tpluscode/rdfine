import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AccommodationMixin } from './Accommodation';

export interface House extends Schema.Accommodation, RdfResource {
  numberOfRooms: Schema.QuantitativeValue | undefined;
  numberOfRoomsLiteral: number | undefined;
}

export function HouseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HouseClass extends AccommodationMixin(Resource) implements House {
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
  }
  return HouseClass
}

class HouseImpl extends HouseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<House>) {
    super(arg, init)
    this.types.add(schema.House)
  }

  static readonly __mixins: Mixin[] = [HouseMixin, AccommodationMixin];
}
HouseMixin.appliesTo = schema.House
HouseMixin.Class = HouseImpl
