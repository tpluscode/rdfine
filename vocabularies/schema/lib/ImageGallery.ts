import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MediaGalleryMixin } from './MediaGallery';

export interface ImageGallery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaGallery<D>, RdfResource<D> {
}

export function ImageGalleryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ImageGallery> & RdfResourceCore> & Base {
  @namespace(schema)
  class ImageGalleryClass extends MediaGalleryMixin(Resource) implements Partial<ImageGallery> {
  }
  return ImageGalleryClass
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
