import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ActionAccessSpecification extends Schema.Intangible, RdfResource {
  availabilityEnds: Date | Date | Date;
  availabilityStarts: Date | Date | Date;
  category: Schema.Thing;
  categoryLiteral: string;
  eligibleRegion: Schema.GeoShape | Schema.Place;
  eligibleRegionLiteral: string;
  expectsAcceptanceOf: Schema.Offer;
  requiresSubscription: Schema.MediaSubscription;
  requiresSubscriptionLiteral: boolean;
}

export default function ActionAccessSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ActionAccessSpecificationClass extends IntangibleMixin(Resource) implements ActionAccessSpecification {
    @property.literal()
    availabilityEnds!: Date | Date | Date;
    @property.literal()
    availabilityStarts!: Date | Date | Date;
    @property.resource()
    category!: Schema.Thing;
    @property.literal({ path: schema.category })
    categoryLiteral!: string;
    @property.resource()
    eligibleRegion!: Schema.GeoShape | Schema.Place;
    @property.literal({ path: schema.eligibleRegion })
    eligibleRegionLiteral!: string;
    @property.resource()
    expectsAcceptanceOf!: Schema.Offer;
    @property.resource()
    requiresSubscription!: Schema.MediaSubscription;
    @property.literal({ type: Boolean, path: schema.requiresSubscription })
    requiresSubscriptionLiteral!: boolean;
  }
  return ActionAccessSpecificationClass
}

class ActionAccessSpecificationImpl extends ActionAccessSpecificationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ActionAccessSpecification)
  }
}
ActionAccessSpecificationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ActionAccessSpecification)
ActionAccessSpecificationMixin.Class = ActionAccessSpecificationImpl
