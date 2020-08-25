import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AccommodationMixin } from './Accommodation';

export interface Suite extends Schema.Accommodation, RdfResource {
  bed: Schema.BedDetails;
  bedLiteral: string;
  numberOfRooms: Schema.QuantitativeValue;
  numberOfRoomsLiteral: number;
  occupancy: Schema.QuantitativeValue;
}

export function SuiteMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SuiteClass extends AccommodationMixin(Resource) implements Suite {
    @property.resource()
    bed!: Schema.BedDetails;
    @property.literal({ path: schema.bed })
    bedLiteral!: string;
    @property.resource()
    numberOfRooms!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral!: number;
    @property.resource()
    occupancy!: Schema.QuantitativeValue;
  }
  return SuiteClass
}

class SuiteImpl extends SuiteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Suite>) {
    super(arg, init)
    this.types.add(schema.Suite)
  }

  static readonly __mixins: Mixin[] = [SuiteMixin, AccommodationMixin];
}
SuiteMixin.appliesTo = schema.Suite
SuiteMixin.Class = SuiteImpl
