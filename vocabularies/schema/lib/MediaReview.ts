import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReviewMixin } from './Review';

export interface MediaReview<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, RdfResource<D> {
  mediaAuthenticityCategory: Schema.MediaManipulationRatingEnumeration | undefined;
}

export function MediaReviewMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MediaReview> & RdfResourceCore> & Base {
  @namespace(schema)
  class MediaReviewClass extends ReviewMixin(Resource) implements Partial<MediaReview> {
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

export const fromPointer = createFactory<MediaReview>([ReviewMixin, MediaReviewMixin], { types: [schema.MediaReview] });
