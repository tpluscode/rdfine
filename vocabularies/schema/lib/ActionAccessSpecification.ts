import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface ActionAccessSpecification<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  availabilityEnds: Date | undefined;
  availabilityStarts: Date | undefined;
  category: Schema.Thing<SiblingNode<ID>> | undefined;
  categoryLiteral: string | undefined;
  eligibleRegion: Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  eligibleRegionLiteral: string | undefined;
  expectsAcceptanceOf: Schema.Offer<SiblingNode<ID>> | undefined;
  ineligibleRegion: Schema.GeoShape<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  ineligibleRegionLiteral: string | undefined;
  requiresSubscription: Schema.MediaSubscription<SiblingNode<ID>> | undefined;
  requiresSubscriptionLiteral: boolean | undefined;
}

export function ActionAccessSpecificationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ActionAccessSpecificationClass extends IntangibleMixin(Resource) implements ActionAccessSpecification {
    @property.literal({ type: Date })
    availabilityEnds: Date | undefined;
    @property.literal({ type: Date })
    availabilityStarts: Date | undefined;
    @property.resource()
    category: Schema.Thing | undefined;
    @property.literal({ path: schema.category })
    categoryLiteral: string | undefined;
    @property.resource()
    eligibleRegion: Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.eligibleRegion })
    eligibleRegionLiteral: string | undefined;
    @property.resource()
    expectsAcceptanceOf: Schema.Offer | undefined;
    @property.resource()
    ineligibleRegion: Schema.GeoShape | Schema.Place | undefined;
    @property.literal({ path: schema.ineligibleRegion })
    ineligibleRegionLiteral: string | undefined;
    @property.resource()
    requiresSubscription: Schema.MediaSubscription | undefined;
    @property.literal({ path: schema.requiresSubscription, type: Boolean })
    requiresSubscriptionLiteral: boolean | undefined;
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
