import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DataDownload)
  }
}
DataDownloadMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataDownload)
DataDownloadMixin.Class = DataDownloadImpl
