import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface CriticReview<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, RdfResource<D> {
}

export function CriticReviewMixin<Base extends Constructor>(Resource: Base): Constructor<CriticReview> & Base {
  @namespace(schema)
  class CriticReviewClass extends ReviewMixin(Resource) implements Partial<CriticReview> {
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
