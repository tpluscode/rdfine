import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ReviewAction>) {
    super(arg)
    this.types.add(schema.ReviewAction)
    initializeProperties(this, init)
  }
}
ReviewActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReviewAction)
ReviewActionMixin.Class = ReviewActionImpl
