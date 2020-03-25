import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EntertainmentBusinessMixin from './EntertainmentBusiness';

export interface ArtGallery extends Schema.EntertainmentBusiness, RdfResource {
}

export default function ArtGalleryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ArtGalleryClass extends EntertainmentBusinessMixin(Resource) implements ArtGallery {
  }
  return ArtGalleryClass
}

class ArtGalleryImpl extends ArtGalleryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ArtGallery>) {
    super(arg)
    this.types.add(schema.ArtGallery)
    initializeProperties<ArtGallery>(this, init)
  }
}
ArtGalleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ArtGallery)
ArtGalleryMixin.Class = ArtGalleryImpl
