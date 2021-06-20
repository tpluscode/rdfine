import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AccommodationMixin } from './Accommodation';

export interface House<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Accommodation<D>, RdfResource<D> {
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
}

export function HouseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<House> & RdfResourceCore> & Base {
  @namespace(schema)
  class HouseClass extends AccommodationMixin(Resource) implements Partial<House> {
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
  }
  return HouseClass
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
