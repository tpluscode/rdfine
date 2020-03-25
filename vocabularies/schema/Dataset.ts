import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Dataset>) {
    super(arg)
    this.types.add(schema.Dataset)
    initializeProperties<Dataset>(this, init)
  }
}
DatasetMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Dataset)
DatasetMixin.Class = DatasetImpl
