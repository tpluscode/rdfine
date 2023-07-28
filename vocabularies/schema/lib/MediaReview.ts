import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReviewMixin } from './Review.js';

export interface MediaReview<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Review<D>, rdfine.RdfResource<D> {
  mediaAuthenticityCategory: Schema.MediaManipulationRatingEnumeration | undefined;
  originalMediaContextDescription: string | undefined;
  originalMediaLink: Schema.MediaObject<D> | Schema.WebPage<D> | undefined;
}

export function MediaReviewMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MediaReview & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MediaReviewClass extends ReviewMixin(Resource) {
    @rdfine.property()
    mediaAuthenticityCategory: Schema.MediaManipulationRatingEnumeration | undefined;
    @rdfine.property.literal()
    originalMediaContextDescription: string | undefined;
    @rdfine.property.resource()
    originalMediaLink: Schema.MediaObject | Schema.WebPage | undefined;
  }
  return MediaReviewClass as any
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
