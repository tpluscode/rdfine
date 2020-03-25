import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Rating extends Schema.Intangible, RdfResource {
  author: Schema.Organization | Schema.Person;
  bestRating: number | string;
  ratingValue: number | string;
  reviewAspect: string;
  worstRating: number | string;
}

export default function RatingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RatingClass extends IntangibleMixin(Resource) implements Rating {
    @property.resource()
    author!: Schema.Organization | Schema.Person;
    @property.literal()
    bestRating!: number | string;
    @property.literal()
    ratingValue!: number | string;
    @property.literal()
    reviewAspect!: string;
    @property.literal()
    worstRating!: number | string;
  }
  return RatingClass
}

class RatingImpl extends RatingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Rating>) {
    super(arg)
    this.types.add(schema.Rating)
    initializeProperties<Rating>(this, init)
  }
}
RatingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Rating)
RatingMixin.Class = RatingImpl
