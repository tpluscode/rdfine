import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface ArtGallery extends Schema.EntertainmentBusiness, RdfResource {
}

export function ArtGalleryMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [ArtGalleryMixin, EntertainmentBusinessMixin];
}
ArtGalleryMixin.appliesTo = schema.ArtGallery
ArtGalleryMixin.Class = ArtGalleryImpl
