import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MediaObjectMixin } from './MediaObject.js';

export interface DataDownload<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MediaObject<D>, RdfResource<D> {
  measurementTechnique: string | undefined;
  measurementTechniqueTerm: RDF.NamedNode | undefined;
}

export function DataDownloadMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DataDownload> & RdfResourceCore> & Base {
  @namespace(schema)
  class DataDownloadClass extends MediaObjectMixin(Resource) implements Partial<DataDownload> {
    @property.literal()
    measurementTechnique: string | undefined;
    @property({ path: schema.measurementTechnique })
    measurementTechniqueTerm: RDF.NamedNode | undefined;
  }
  return DataDownloadClass
}

class DataDownloadImpl extends DataDownloadMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DataDownload>) {
    super(arg, init)
    this.types.add(schema.DataDownload)
  }

  static readonly __mixins: Mixin[] = [DataDownloadMixin, MediaObjectMixin];
}
DataDownloadMixin.appliesTo = schema.DataDownload
DataDownloadMixin.Class = DataDownloadImpl

export const fromPointer = createFactory<DataDownload>([MediaObjectMixin, DataDownloadMixin], { types: [schema.DataDownload] });
