import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<VideoGallery>) {
    super(arg, init)
    this.types.add(schema.VideoGallery)
  }
}
VideoGalleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VideoGallery)
VideoGalleryMixin.Class = VideoGalleryImpl
