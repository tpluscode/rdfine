import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import MediaGalleryMixin from './MediaGallery';

export interface ImageGallery extends Schema.MediaGallery, RdfResource {
}

export default function ImageGalleryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ImageGalleryClass extends MediaGalleryMixin(Resource) implements ImageGallery {
  }
  return ImageGalleryClass
}

class ImageGalleryImpl extends ImageGalleryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ImageGallery>) {
    super(arg)
    this.types.add(schema.ImageGallery)
    initializeProperties<ImageGallery>(this, init)
  }
}
ImageGalleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ImageGallery)
ImageGalleryMixin.Class = ImageGalleryImpl
