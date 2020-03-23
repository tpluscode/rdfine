import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CollectionPageMixin from './CollectionPage';

export interface MediaGallery extends Schema.CollectionPage, RdfResource {
}

export default function MediaGalleryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaGalleryClass extends CollectionPageMixin(Resource) implements MediaGallery {
  }
  return MediaGalleryClass
}

class MediaGalleryImpl extends MediaGalleryMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MediaGallery)
  }
}
MediaGalleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MediaGallery)
MediaGalleryMixin.Class = MediaGalleryImpl
