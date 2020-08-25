import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Seat extends Schema.Intangible, RdfResource {
  seatingType: string;
  seatingTypeTerm: Schema.QualitativeValue;
  seatNumber: string;
  seatRow: string;
  seatSection: string;
}

export function SeatMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SeatClass extends IntangibleMixin(Resource) implements Seat {
    @property.literal()
    seatingType!: string;
    @property({ path: schema.seatingType })
    seatingTypeTerm!: Schema.QualitativeValue;
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
  constructor(arg: ResourceNode, init?: Initializer<Seat>) {
    super(arg, init)
    this.types.add(schema.Seat)
  }

  static readonly __mixins: Mixin[] = [SeatMixin, IntangibleMixin];
}
SeatMixin.appliesTo = schema.Seat
SeatMixin.Class = SeatImpl
