import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LodgingBusinessMixin } from './LodgingBusiness';

export interface Hotel<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LodgingBusiness<D>, RdfResource<D> {
}

export function HotelMixin<Base extends Constructor>(Resource: Base): Constructor<Hotel> & Base {
  @namespace(schema)
  class HotelClass extends LodgingBusinessMixin(Resource) implements Hotel {
  }
  return HotelClass
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
