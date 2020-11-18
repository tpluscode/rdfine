import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AccommodationMixin } from './Accommodation';

export interface Apartment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Accommodation<D>, RdfResource<D> {
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
  occupancy: Schema.QuantitativeValue<D> | undefined;
}

export function ApartmentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ApartmentClass extends AccommodationMixin(Resource) implements Apartment {
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @property.resource()
    occupancy: Schema.QuantitativeValue | undefined;
  }
  return ApartmentClass
}

class ApartmentImpl extends ApartmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Apartment>) {
    super(arg, init)
    this.types.add(schema.Apartment)
  }

  static readonly __mixins: Mixin[] = [ApartmentMixin, AccommodationMixin];
}
ApartmentMixin.appliesTo = schema.Apartment
ApartmentMixin.Class = ApartmentImpl
