import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface MediaReview<ID extends ResourceNode = ResourceNode> extends Schema.Review<ID>, RdfResource<ID> {
  mediaAuthenticityCategory: Schema.MediaManipulationRatingEnumeration | undefined;
}

export function MediaReviewMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaReviewClass extends ReviewMixin(Resource) implements MediaReview {
    @property()
    mediaAuthenticityCategory: Schema.MediaManipulationRatingEnumeration | undefined;
  }
  return MediaReviewClass
}

class MediaReviewImpl extends MediaReviewMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MediaReview>) {
    super(arg, init)
    this.types.add(schema.MediaReview)
  }

  static readonly __mixins: Mixin[] = [MediaReviewMixin, ReviewMixin];
}
MediaReviewMixin.appliesTo = schema.MediaReview
MediaReviewMixin.Class = MediaReviewImpl
