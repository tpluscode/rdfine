import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { MediaGalleryMixin } from './MediaGallery';

export interface VideoGallery extends Schema.MediaGallery, RdfResource {
}

export function VideoGalleryMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [VideoGalleryMixin, MediaGalleryMixin];
}
VideoGalleryMixin.appliesTo = schema.VideoGallery
VideoGalleryMixin.Class = VideoGalleryImpl
