import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AccommodationMixin } from './Accommodation.js';

export interface House<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Accommodation<D>, rdfine.RdfResource<D> {
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
}

export function HouseMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<House & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HouseClass extends AccommodationMixin(Resource) {
    @rdfine.property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
  }
  return HouseClass as any
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

export const fromPointer = createFactory<House>([AccommodationMixin, HouseMixin], { types: [schema.House] });
