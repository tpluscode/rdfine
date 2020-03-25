import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AssessActionMixin from './AssessAction';

export interface ReviewAction extends Schema.AssessAction, RdfResource {
  resultReview: Schema.Review;
}

export default function ReviewActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReviewActionClass extends AssessActionMixin(Resource) implements ReviewAction {
    @property.resource()
    resultReview!: Schema.Review;
  }
  return ReviewActionClass
}

class ReviewActionImpl extends ReviewActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReviewAction>) {
    super(arg, init)
    this.types.add(schema.ReviewAction)
  }
}
ReviewActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReviewAction)
ReviewActionMixin.Class = ReviewActionImpl
