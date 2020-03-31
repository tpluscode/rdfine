import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface PublicationVolume extends Schema.CreativeWork, RdfResource {
  pageEnd: number | string;
  pageStart: number | string;
  pagination: string;
  volumeNumber: number | string;
}

export default function PublicationVolumeMixin<Base extends Constructor>(Resource: Base) {
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
}
PublicationVolumeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PublicationVolume)
PublicationVolumeMixin.Class = PublicationVolumeImpl
