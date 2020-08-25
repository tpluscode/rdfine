import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Rating extends Schema.Intangible, RdfResource {
  author: Schema.Organization | Schema.Person;
  bestRating: number | string;
  ratingValue: number | string;
  reviewAspect: string;
  worstRating: number | string;
}

export function RatingMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<Rating>) {
    super(arg, init)
    this.types.add(schema.Rating)
  }

  static readonly __mixins: Mixin[] = [RatingMixin, IntangibleMixin];
}
RatingMixin.appliesTo = schema.Rating
RatingMixin.Class = RatingImpl
