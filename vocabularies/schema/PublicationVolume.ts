import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface PublicationVolume extends Schema.CreativeWork, RdfResource {
  pageEnd: number | string;
  pageStart: number | string;
  pagination: string;
  volumeNumber: number | string;
}

export function PublicationVolumeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PublicationVolumeClass extends CreativeWorkMixin(Resource) implements PublicationVolume {
    @property.literal()
    pageEnd!: number | string;
    @property.literal()
    pageStart!: number | string;
    @property.literal()
    pagination!: string;
    @property.literal()
    volumeNumber!: number | string;
  }
  return PublicationVolumeClass
}

class PublicationVolumeImpl extends PublicationVolumeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PublicationVolume>) {
    super(arg, init)
    this.types.add(schema.PublicationVolume)
  }

  static readonly __mixins: Mixin[] = [PublicationVolumeMixin, CreativeWorkMixin];
}
PublicationVolumeMixin.appliesTo = schema.PublicationVolume
PublicationVolumeMixin.Class = PublicationVolumeImpl
