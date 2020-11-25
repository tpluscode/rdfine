import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AssessActionMixin } from './AssessAction';

export interface ReviewAction<ID extends ResourceNode = ResourceNode> extends Schema.AssessAction<ID>, RdfResource<ID> {
  resultReview: Schema.Review<SiblingNode<ID>> | undefined;
}

export function ReviewActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReviewActionClass extends AssessActionMixin(Resource) implements ReviewAction {
    @property.resource()
    resultReview: Schema.Review | undefined;
  }
  return ReviewActionClass
}

class ReviewActionImpl extends ReviewActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReviewAction>) {
    super(arg, init)
    this.types.add(schema.ReviewAction)
  }

  static readonly __mixins: Mixin[] = [ReviewActionMixin, AssessActionMixin];
}
ReviewActionMixin.appliesTo = schema.ReviewAction
ReviewActionMixin.Class = ReviewActionImpl
