import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CollectionPageMixin } from './CollectionPage';

export interface MediaGallery<ID extends ResourceNode = ResourceNode> extends Schema.CollectionPage<ID>, RdfResource<ID> {
}

export function MediaGalleryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MediaGalleryClass extends CollectionPageMixin(Resource) implements MediaGallery {
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
