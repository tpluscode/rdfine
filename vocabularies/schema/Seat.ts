import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Seat extends Schema.Intangible, RdfResource {
  seatingType: Schema.QualitativeValue;
  seatingTypeLiteral: string;
  seatNumber: string;
  seatRow: string;
  seatSection: string;
}

export default function SeatMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SeatClass extends IntangibleMixin(Resource) implements Seat {
    @property.resource()
    seatingType!: Schema.QualitativeValue;
    @property.literal({ path: schema.seatingType })
    seatingTypeLiteral!: string;
    @property.literal()
    seatNumber!: string;
    @property.literal()
    seatRow!: string;
    @property.literal()
    seatSection!: string;
  }
  return SeatClass
}

class SeatImpl extends SeatMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Seat>) {
    super(arg)
    this.types.add(schema.Seat)
    initializeProperties<Seat>(this, init)
  }
}
SeatMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Seat)
SeatMixin.Class = SeatImpl
