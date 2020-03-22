import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Brand extends Schema.Intangible, RdfResource {
  aggregateRating: Schema.AggregateRating;
  logo: Schema.ImageObject;
  logoLiteral: string;
  review: Schema.Review;
  slogan: string;
}

export default function BrandMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BrandClass extends IntangibleMixin(Resource) implements Brand {
    @property.resource()
    aggregateRating!: Schema.AggregateRating;
    @property.resource()
    logo!: Schema.ImageObject;
    @property.literal({ path: schema.logo })
    logoLiteral!: string;
    @property.resource()
    review!: Schema.Review;
    @property.literal()
    slogan!: string;
  }
  return BrandClass
}

class BrandImpl extends BrandMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Brand)
  }
}
BrandMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Brand)
BrandMixin.Class = BrandImpl
