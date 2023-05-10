import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AssessActionMixin } from './AssessAction.js';

export interface ReviewAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AssessAction<D>, rdfine.RdfResource<D> {
  resultReview: Schema.Review<D> | undefined;
}

export function ReviewActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ReviewAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReviewActionClass extends AssessActionMixin(Resource) implements Partial<ReviewAction> {
    @rdfine.property.resource()
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

export const fromPointer = createFactory<ReviewAction>([AssessActionMixin, ReviewActionMixin], { types: [schema.ReviewAction] });
