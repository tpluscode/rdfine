import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceMixin } from './Place';

export interface Accommodation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
  amenityFeature: Schema.LocationFeatureSpecification<D> | undefined;
  floorSize: Schema.QuantitativeValue<D> | undefined;
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
  permittedUsage: string | undefined;
  petsAllowed: boolean | string | undefined;
}

export function AccommodationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AccommodationClass extends PlaceMixin(Resource) implements Accommodation {
    @property.resource()
    amenityFeature: Schema.LocationFeatureSpecification | undefined;
    @property.resource()
    floorSize: Schema.QuantitativeValue | undefined;
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @property.literal()
    permittedUsage: string | undefined;
    @property.literal()
    petsAllowed: boolean | string | undefined;
  }
  return AccommodationClass
}

class AccommodationImpl extends AccommodationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Accommodation>) {
    super(arg, init)
    this.types.add(schema.Accommodation)
  }

  static readonly __mixins: Mixin[] = [AccommodationMixin, PlaceMixin];
}
AccommodationMixin.appliesTo = schema.Accommodation
AccommodationMixin.Class = AccommodationImpl
