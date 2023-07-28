import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface PublicationVolume<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
  volumeNumber: number | string | undefined;
}

export function PublicationVolumeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PublicationVolume & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PublicationVolumeClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.literal()
    pageEnd: number | string | undefined;
    @rdfine.property.literal()
    pageStart: number | string | undefined;
    @rdfine.property.literal()
    pagination: string | undefined;
    @rdfine.property.literal()
    volumeNumber: number | string | undefined;
  }
  return PublicationVolumeClass as any
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

export const fromPointer = createFactory<PublicationVolume>([CreativeWorkMixin, PublicationVolumeMixin], { types: [schema.PublicationVolume] });
