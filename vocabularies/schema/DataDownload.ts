import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import MediaObjectMixin from './MediaObject';

export interface DataDownload extends Schema.MediaObject, RdfResource {
}

export default function DataDownloadMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataDownloadClass extends MediaObjectMixin(Resource) implements DataDownload {
  }
  return DataDownloadClass
}

class DataDownloadImpl extends DataDownloadMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<DataDownload>) {
    super(arg)
    this.types.add(schema.DataDownload)
    initializeProperties<DataDownload>(this, init)
  }
}
DataDownloadMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataDownload)
DataDownloadMixin.Class = DataDownloadImpl
