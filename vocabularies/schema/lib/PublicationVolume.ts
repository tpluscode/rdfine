import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface PublicationVolume<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  pageEnd: number | string | undefined;
  pageStart: number | string | undefined;
  pagination: string | undefined;
  volumeNumber: number | string | undefined;
}

export function PublicationVolumeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PublicationVolume> & RdfResourceCore> & Base {
  @namespace(schema)
  class PublicationVolumeClass extends CreativeWorkMixin(Resource) implements Partial<PublicationVolume> {
    @property.literal()
    pageEnd: number | string | undefined;
    @property.literal()
    pageStart: number | string | undefined;
    @property.literal()
    pagination: string | undefined;
    @property.literal()
    volumeNumber: number | string | undefined;
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

export const fromPointer = createFactory<PublicationVolume>([CreativeWorkMixin, PublicationVolumeMixin], { types: [schema.PublicationVolume] });
