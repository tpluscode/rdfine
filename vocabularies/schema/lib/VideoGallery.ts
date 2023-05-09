import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MediaGalleryMixin } from './MediaGallery.js';

export interface VideoGallery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaGallery<D>, rdfine.RdfResource<D> {
}

export function VideoGalleryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<VideoGallery> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VideoGalleryClass extends MediaGalleryMixin(Resource) implements Partial<VideoGallery> {
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

export const fromPointer = createFactory<VideoGallery>([MediaGalleryMixin, VideoGalleryMixin], { types: [schema.VideoGallery] });
