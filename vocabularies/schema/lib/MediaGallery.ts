import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CollectionPageMixin } from './CollectionPage.js';

export interface MediaGallery<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CollectionPage<D>, RdfResource<D> {
}

export function MediaGalleryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MediaGallery> & RdfResourceCore> & Base {
  @namespace(schema)
  class MediaGalleryClass extends CollectionPageMixin(Resource) implements Partial<MediaGallery> {
  }
  return MediaGalleryClass
}

class MediaGalleryImpl extends MediaGalleryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MediaGallery>) {
    super(arg, init)
    this.types.add(schema.MediaGallery)
  }

  static readonly __mixins: Mixin[] = [MediaGalleryMixin, CollectionPageMixin];
}
MediaGalleryMixin.appliesTo = schema.MediaGallery
MediaGalleryMixin.Class = MediaGalleryImpl

export const fromPointer = createFactory<MediaGallery>([CollectionPageMixin, MediaGalleryMixin], { types: [schema.MediaGallery] });
