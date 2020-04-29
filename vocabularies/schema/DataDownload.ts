import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { MediaObjectMixin } from './MediaObject';

export interface DataDownload extends Schema.MediaObject, RdfResource {
}

export function DataDownloadMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataDownloadClass extends MediaObjectMixin(Resource) implements DataDownload {
  }
  return DataDownloadClass
}

class DataDownloadImpl extends DataDownloadMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DataDownload>) {
    super(arg, init)
    this.types.add(schema.DataDownload)
  }
}
DataDownloadMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataDownload)
DataDownloadMixin.Class = DataDownloadImpl
