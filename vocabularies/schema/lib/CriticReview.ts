import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface CriticReview<ID extends ResourceNode = ResourceNode> extends Schema.Review<ID>, RdfResource<ID> {
}

export function CriticReviewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CriticReviewClass extends ReviewMixin(Resource) implements CriticReview {
  }
  return CriticReviewClass
}

class CriticReviewImpl extends CriticReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CriticReview>) {
    super(arg, init)
    this.types.add(schema.CriticReview)
  }

  static readonly __mixins: Mixin[] = [CriticReviewMixin, ReviewMixin];
}
CriticReviewMixin.appliesTo = schema.CriticReview
CriticReviewMixin.Class = CriticReviewImpl
