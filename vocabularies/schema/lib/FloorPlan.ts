import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface FloorPlan<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  amenityFeature: Schema.LocationFeatureSpecification<D> | undefined;
  floorSize: Schema.QuantitativeValue<D> | undefined;
  isPlanForApartment: Schema.Accommodation<D> | undefined;
  layoutImage: Schema.ImageObject<D> | undefined;
  numberOfAccommodationUnits: Schema.QuantitativeValue<D> | undefined;
  numberOfAvailableAccommodationUnits: Schema.QuantitativeValue<D> | undefined;
  numberOfBathroomsTotal: number | undefined;
  numberOfBedrooms: Schema.QuantitativeValue<D> | undefined;
  numberOfBedroomsLiteral: number | undefined;
  numberOfFullBathrooms: number | undefined;
  numberOfPartialBathrooms: number | undefined;
  numberOfRooms: Schema.QuantitativeValue<D> | undefined;
  numberOfRoomsLiteral: number | undefined;
  petsAllowed: boolean | string | undefined;
}

export function FloorPlanMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FloorPlan & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FloorPlanClass extends IntangibleMixin(Resource) {
    @rdfine.property.resource()
    amenityFeature: Schema.LocationFeatureSpecification | undefined;
    @rdfine.property.resource()
    floorSize: Schema.QuantitativeValue | undefined;
    @rdfine.property.resource()
    isPlanForApartment: Schema.Accommodation | undefined;
    @rdfine.property.resource()
    layoutImage: Schema.ImageObject | undefined;
    @rdfine.property.resource()
    numberOfAccommodationUnits: Schema.QuantitativeValue | undefined;
    @rdfine.property.resource()
    numberOfAvailableAccommodationUnits: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ type: Number })
    numberOfBathroomsTotal: number | undefined;
    @rdfine.property.resource()
    numberOfBedrooms: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.numberOfBedrooms, type: Number })
    numberOfBedroomsLiteral: number | undefined;
    @rdfine.property.literal({ type: Number })
    numberOfFullBathrooms: number | undefined;
    @rdfine.property.literal({ type: Number })
    numberOfPartialBathrooms: number | undefined;
    @rdfine.property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @rdfine.property.literal()
    petsAllowed: boolean | string | undefined;
  }
  return FloorPlanClass as any
}

class FloorPlanImpl extends FloorPlanMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FloorPlan>) {
    super(arg, init)
    this.types.add(schema.FloorPlan)
  }

  static readonly __mixins: Mixin[] = [FloorPlanMixin, IntangibleMixin];
}
FloorPlanMixin.appliesTo = schema.FloorPlan
FloorPlanMixin.Class = FloorPlanImpl

export const fromPointer = createFactory<FloorPlan>([IntangibleMixin, FloorPlanMixin], { types: [schema.FloorPlan] });
