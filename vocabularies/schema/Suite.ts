import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import AccommodationMixin from './Accommodation';

export interface Suite extends Schema.Accommodation, RdfResource {
  bed: Schema.BedDetails | Schema.BedType;
  bedLiteral: string;
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
  occupancy: Schema.QuantitativeValue;
}

export default function SuiteMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SuiteClass extends AccommodationMixin(Resource) implements Suite {
    @property.resource()
    bed!: Schema.BedDetails | Schema.BedType;
    @property.literal({ path: schema.bed })
    bedLiteral!: string;
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.numberOfRooms })
    numberOfRoomsLiteral!: number;
    @property.resource()
    occupancy!: Schema.QuantitativeValue;
  }
  return SuiteClass
}

class SuiteImpl extends SuiteMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Suite)
  }
}
SuiteMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Suite)
SuiteMixin.Class = SuiteImpl
