import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface FloorPlan<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  amenityFeature: Schema.LocationFeatureSpecification<SiblingNode<ID>> | undefined;
  floorSize: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  isPlanForApartment: Schema.Accommodation<SiblingNode<ID>> | undefined;
  numberOfAccommodationUnits: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfAvailableAccommodationUnits: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfBathroomsTotal: number | undefined;
  numberOfBedrooms: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfBedroomsLiteral: number | undefined;
  numberOfFullBathrooms: number | undefined;
  numberOfPartialBathrooms: number | undefined;
  numberOfRooms: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  numberOfRoomsLiteral: number | undefined;
  petsAllowed: boolean | string | undefined;
}

export function FloorPlanMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FloorPlanClass extends IntangibleMixin(Resource) implements FloorPlan {
    @property.resource()
    amenityFeature: Schema.LocationFeatureSpecification | undefined;
    @property.resource()
    floorSize: Schema.QuantitativeValue | undefined;
    @property.resource()
    isPlanForApartment: Schema.Accommodation | undefined;
    @property.resource()
    numberOfAccommodationUnits: Schema.QuantitativeValue | undefined;
    @property.resource()
    numberOfAvailableAccommodationUnits: Schema.QuantitativeValue | undefined;
    @property.literal({ type: Number })
    numberOfBathroomsTotal: number | undefined;
    @property.resource()
    numberOfBedrooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfBedrooms, type: Number })
    numberOfBedroomsLiteral: number | undefined;
    @property.literal({ type: Number })
    numberOfFullBathrooms: number | undefined;
    @property.literal({ type: Number })
    numberOfPartialBathrooms: number | undefined;
    @property.resource()
    numberOfRooms: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numberOfRooms, type: Number })
    numberOfRoomsLiteral: number | undefined;
    @property.literal()
    petsAllowed: boolean | string | undefined;
  }
  return FloorPlanClass
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
