import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Review extends Schema.CreativeWork, RdfResource {
  itemReviewed: Schema.Thing;
  reviewAspect: string;
  reviewBody: string;
  reviewRating: Schema.Rating;
}

export function ReviewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReviewClass extends CreativeWorkMixin(Resource) implements Review {
    @property.resource()
    itemReviewed!: Schema.Thing;
    @property.literal()
    reviewAspect!: string;
    @property.literal()
    reviewBody!: string;
    @property.resource()
    reviewRating!: Schema.Rating;
  }
  return ReviewClass
}

class ReviewImpl extends ReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Review>) {
    super(arg, init)
    this.types.add(schema.Review)
  }

  static readonly __mixins: Mixin[] = [ReviewMixin, CreativeWorkMixin];
}
ReviewMixin.appliesTo = schema.Review
ReviewMixin.Class = ReviewImpl
