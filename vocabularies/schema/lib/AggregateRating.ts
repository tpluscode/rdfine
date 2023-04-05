import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { RatingMixin } from './Rating.js';

export interface AggregateRating<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Rating<D>, RdfResource<D> {
  itemReviewed: Schema.Thing<D> | undefined;
  ratingCount: number | undefined;
  reviewCount: number | undefined;
}

export function AggregateRatingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AggregateRating> & RdfResourceCore> & Base {
  @namespace(schema)
  class AggregateRatingClass extends RatingMixin(Resource) implements Partial<AggregateRating> {
    @property.resource()
    itemReviewed: Schema.Thing | undefined;
    @property.literal({ type: Number })
    ratingCount: number | undefined;
    @property.literal({ type: Number })
    reviewCount: number | undefined;
  }
  return AggregateRatingClass
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
