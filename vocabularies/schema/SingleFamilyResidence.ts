import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import HouseMixin from './House';

export interface SingleFamilyResidence extends Schema.House, RdfResource {
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
  occupancy: Schema.QuantitativeValue;
}

export default function SingleFamilyResidenceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SingleFamilyResidenceClass extends HouseMixin(Resource) implements SingleFamilyResidence {
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral!: number;
    @property.resource()
    occupancy!: Schema.QuantitativeValue;
  }
  return SingleFamilyResidenceClass
}

class SingleFamilyResidenceImpl extends SingleFamilyResidenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SingleFamilyResidence>) {
    super(arg, init)
    this.types.add(schema.SingleFamilyResidence)
  }
}
SingleFamilyResidenceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SingleFamilyResidence)
SingleFamilyResidenceMixin.Class = SingleFamilyResidenceImpl
