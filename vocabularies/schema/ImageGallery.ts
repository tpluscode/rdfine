import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ImageGallery>) {
    super(arg, init)
    this.types.add(schema.ImageGallery)
  }
}
ImageGalleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ImageGallery)
ImageGalleryMixin.Class = ImageGalleryImpl
