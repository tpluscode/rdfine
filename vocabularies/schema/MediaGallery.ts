import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<MediaGallery>) {
    super(arg)
    this.types.add(schema.MediaGallery)
    initializeProperties(this, init)
  }
}
MediaGalleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MediaGallery)
MediaGalleryMixin.Class = MediaGalleryImpl
