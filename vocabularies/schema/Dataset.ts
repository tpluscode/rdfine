import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Dataset extends Schema.CreativeWork, RdfResource {
  catalog: Schema.DataCatalog;
  datasetTimeInterval: Date;
  distribution: Schema.DataDownload;
  includedDataCatalog: Schema.DataCatalog;
  includedInDataCatalog: Schema.DataCatalog;
  issn: string;
}

export default function DatasetMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DatasetClass extends CreativeWorkMixin(Resource) implements Dataset {
    @property.resource()
    catalog!: Schema.DataCatalog;
    @property.literal()
    datasetTimeInterval!: Date;
    @property.resource()
    distribution!: Schema.DataDownload;
    @property.resource()
    includedDataCatalog!: Schema.DataCatalog;
    @property.resource()
    includedInDataCatalog!: Schema.DataCatalog;
    @property.literal()
    issn!: string;
  }
  return DatasetClass
}

class DatasetImpl extends DatasetMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Dataset)
  }
}
DatasetMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Dataset)
DatasetMixin.Class = DatasetImpl
