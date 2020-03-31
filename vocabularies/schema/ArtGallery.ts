import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ArtGallery>) {
    super(arg, init)
    this.types.add(schema.ArtGallery)
  }
}
ArtGalleryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ArtGallery)
ArtGalleryMixin.Class = ArtGalleryImpl
