import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Seat<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  seatingType: string | undefined;
  seatingTypeTerm: Schema.QualitativeValue | undefined;
  seatNumber: string | undefined;
  seatRow: string | undefined;
  seatSection: string | undefined;
}

export function SeatMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Seat> & RdfResourceCore> & Base {
  @namespace(schema)
  class SeatClass extends IntangibleMixin(Resource) implements Partial<Seat> {
    @property.literal()
    seatingType: string | undefined;
    @property({ path: schema.seatingType })
    seatingTypeTerm: Schema.QualitativeValue | undefined;
    @property.literal()
    seatNumber: string | undefined;
    @property.literal()
    seatRow: string | undefined;
    @property.literal()
    seatSection: string | undefined;
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

export const fromPointer = createFactory<Seat>([IntangibleMixin, SeatMixin], { types: [schema.Seat] });
