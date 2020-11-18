import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface EmployerReview<ID extends ResourceNode = ResourceNode> extends Schema.Review<ID>, RdfResource<ID> {
}

export function EmployerReviewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmployerReviewClass extends ReviewMixin(Resource) implements EmployerReview {
  }
  return EmployerReviewClass
}

class EmployerReviewImpl extends EmployerReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmployerReview>) {
    super(arg, init)
    this.types.add(schema.EmployerReview)
  }

  static readonly __mixins: Mixin[] = [EmployerReviewMixin, ReviewMixin];
}
EmployerReviewMixin.appliesTo = schema.EmployerReview
EmployerReviewMixin.Class = EmployerReviewImpl
