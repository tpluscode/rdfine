import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AccommodationMixin } from './Accommodation.js';

export interface Suite<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Accommodation<D>, RdfResource<D> {
  bed: Schema.BedDetails<D> | undefined;
  bedLiteral: string | undefined;
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
  occupancy: Schema.QuantitativeValue<D> | undefined;
}

export function SuiteMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Suite> & RdfResourceCore> & Base {
  @namespace(schema)
  class SuiteClass extends AccommodationMixin(Resource) implements Partial<Suite> {
    @property.resource()
    bed: Schema.BedDetails | undefined;
    @property.literal({ path: schema.bed })
    bedLiteral: string | undefined;
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @property.resource()
    occupancy: Schema.QuantitativeValue | undefined;
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

export const fromPointer = createFactory<Suite>([AccommodationMixin, SuiteMixin], { types: [schema.Suite] });
