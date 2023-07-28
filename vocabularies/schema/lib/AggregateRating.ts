import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RatingMixin } from './Rating.js';

export interface AggregateRating<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Rating<D>, rdfine.RdfResource<D> {
  itemReviewed: Schema.Thing<D> | undefined;
  ratingCount: number | undefined;
  reviewCount: number | undefined;
}

export function AggregateRatingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AggregateRating & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AggregateRatingClass extends RatingMixin(Resource) {
    @rdfine.property.resource()
    itemReviewed: Schema.Thing | undefined;
    @rdfine.property.literal({ type: Number })
    ratingCount: number | undefined;
    @rdfine.property.literal({ type: Number })
    reviewCount: number | undefined;
  }
  return AggregateRatingClass as any
}

class AggregateRatingImpl extends AggregateRatingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AggregateRating>) {
    super(arg, init)
    this.types.add(schema.AggregateRating)
  }

  static readonly __mixins: Mixin[] = [AggregateRatingMixin, RatingMixin];
}
AggregateRatingMixin.appliesTo = schema.AggregateRating
AggregateRatingMixin.Class = AggregateRatingImpl

export const fromPointer = createFactory<AggregateRating>([RatingMixin, AggregateRatingMixin], { types: [schema.AggregateRating] });
