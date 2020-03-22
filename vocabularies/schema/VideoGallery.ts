import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import MediaGalleryMixin from './MediaGallery';

export interface VideoGallery extends Schema.MediaGallery, RdfResource {
}

export default function VideoGalleryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VideoGalleryClass extends MediaGalleryMixin(Resource) implements VideoGallery {
  }
  return VideoGalleryClass
}

class VideoGalleryImpl extends VideoGalleryMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.VideoGallery)
  }
}
VideoGalleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoGallery)
VideoGalleryMixin.Class = VideoGalleryImpl
