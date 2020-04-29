import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Brand extends Schema.Intangible, RdfResource {
  aggregateRating: Schema.AggregateRating;
  logo: Schema.ImageObject;
  review: Schema.Review;
  slogan: string;
}

export function BrandMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BrandClass extends IntangibleMixin(Resource) implements Brand {
    @property.resource()
    aggregateRating!: Schema.AggregateRating;
    @property.resource()
    logo!: Schema.ImageObject;
    @property.resource()
    review!: Schema.Review;
    @property.literal()
    slogan!: string;
  }
  return BrandClass
}

class BrandImpl extends BrandMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Brand>) {
    super(arg, init)
    this.types.add(schema.Brand)
  }
}
BrandMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Brand)
BrandMixin.Class = BrandImpl
