import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Rating<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  author: Schema.Organization<D> | Schema.Person<D> | undefined;
  bestRating: number | string | undefined;
  ratingValue: number | string | undefined;
  reviewAspect: string | undefined;
  worstRating: number | string | undefined;
}

export function RatingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RatingClass extends IntangibleMixin(Resource) implements Rating {
    @property.resource()
    author: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    bestRating: number | string | undefined;
    @property.literal()
    ratingValue: number | string | undefined;
    @property.literal()
    reviewAspect: string | undefined;
    @property.literal()
    worstRating: number | string | undefined;
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
