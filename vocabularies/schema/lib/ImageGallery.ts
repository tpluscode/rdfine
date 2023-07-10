import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MediaGalleryMixin } from './MediaGallery.js';

export interface ImageGallery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaGallery<D>, rdfine.RdfResource<D> {
}

export function ImageGalleryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ImageGallery & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ImageGalleryClass extends MediaGalleryMixin(Resource) {
  }
  return ImageGalleryClass as any
}

class ImageGalleryImpl extends ImageGalleryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ImageGallery>) {
    super(arg, init)
    this.types.add(schema.ImageGallery)
  }

  static readonly __mixins: Mixin[] = [ImageGalleryMixin, MediaGalleryMixin];
}
ImageGalleryMixin.appliesTo = schema.ImageGallery
ImageGalleryMixin.Class = ImageGalleryImpl

export const fromPointer = createFactory<ImageGallery>([MediaGalleryMixin, ImageGalleryMixin], { types: [schema.ImageGallery] });
