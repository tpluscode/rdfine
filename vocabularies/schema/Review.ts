import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Review extends Schema.CreativeWork, RdfResource {
  itemReviewed: Schema.Thing | undefined;
  reviewAspect: string | undefined;
  reviewBody: string | undefined;
  reviewRating: Schema.Rating | undefined;
}

export function ReviewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReviewClass extends CreativeWorkMixin(Resource) implements Review {
    @property.resource()
    itemReviewed: Schema.Thing | undefined;
    @property.literal()
    reviewAspect: string | undefined;
    @property.literal()
    reviewBody: string | undefined;
    @property.resource()
    reviewRating: Schema.Rating | undefined;
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
