import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LodgingBusinessMixin } from './LodgingBusiness.js';

export interface Hotel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, rdfine.RdfResource<D> {
}

export function HotelMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Hotel & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HotelClass extends LodgingBusinessMixin(Resource) {
  }
  return HotelClass as any
}

class HotelImpl extends HotelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Hotel>) {
    super(arg, init)
    this.types.add(schema.Hotel)
  }

  static readonly __mixins: Mixin[] = [HotelMixin, LodgingBusinessMixin];
}
HotelMixin.appliesTo = schema.Hotel
HotelMixin.Class = HotelImpl

export const fromPointer = createFactory<Hotel>([LodgingBusinessMixin, HotelMixin], { types: [schema.Hotel] });
