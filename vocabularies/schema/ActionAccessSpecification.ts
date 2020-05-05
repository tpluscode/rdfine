import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface ActionAccessSpecification extends Schema.Intangible, RdfResource {
  availabilityEnds: Date;
  availabilityStarts: Date;
  category: Schema.Thing;
  categoryLiteral: string;
  eligibleRegion: Schema.GeoShape | Schema.Place;
  eligibleRegionLiteral: string;
  expectsAcceptanceOf: Schema.Offer;
  requiresSubscription: Schema.MediaSubscription;
  requiresSubscriptionLiteral: boolean;
}

export function ActionAccessSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ActionAccessSpecificationClass extends IntangibleMixin(Resource) implements ActionAccessSpecification {
    @property.literal()
    availabilityEnds!: Date;
    @property.literal()
    availabilityStarts!: Date;
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
    @property.literal({ path: schema.requiresSubscription, type: Boolean })
    requiresSubscriptionLiteral!: boolean;
  }
  return ActionAccessSpecificationClass
}

class ActionAccessSpecificationImpl extends ActionAccessSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ActionAccessSpecification>) {
    super(arg, init)
    this.types.add(schema.ActionAccessSpecification)
  }

  static readonly __mixins: Mixin[] = [ActionAccessSpecificationMixin, IntangibleMixin];
}
ActionAccessSpecificationMixin.appliesTo = schema.ActionAccessSpecification
ActionAccessSpecificationMixin.Class = ActionAccessSpecificationImpl
