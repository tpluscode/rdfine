import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface MediaReviewItem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  mediaItemAppearance: Schema.MediaObject<D> | undefined;
}

export function MediaReviewItemMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MediaReviewItem> & RdfResourceCore> & Base {
  @namespace(schema)
  class MediaReviewItemClass extends CreativeWorkMixin(Resource) implements Partial<MediaReviewItem> {
    @property.resource()
    mediaItemAppearance: Schema.MediaObject | undefined;
  }
  return MediaReviewItemClass
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
