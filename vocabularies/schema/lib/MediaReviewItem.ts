import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface MediaReviewItem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  mediaItemAppearance: Schema.MediaObject<D> | undefined;
}

export function MediaReviewItemMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MediaReviewItem & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MediaReviewItemClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.resource()
    mediaItemAppearance: Schema.MediaObject | undefined;
  }
  return MediaReviewItemClass as any
}

class MediaReviewItemImpl extends MediaReviewItemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MediaReviewItem>) {
    super(arg, init)
    this.types.add(schema.MediaReviewItem)
  }

  static readonly __mixins: Mixin[] = [MediaReviewItemMixin, CreativeWorkMixin];
}
MediaReviewItemMixin.appliesTo = schema.MediaReviewItem
MediaReviewItemMixin.Class = MediaReviewItemImpl

export const fromPointer = createFactory<MediaReviewItem>([CreativeWorkMixin, MediaReviewItemMixin], { types: [schema.MediaReviewItem] });
