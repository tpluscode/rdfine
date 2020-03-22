import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface DataCatalog extends Schema.CreativeWork, RdfResource {
  dataset: Schema.Dataset;
}

export default function DataCatalogMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataCatalogClass extends CreativeWorkMixin(Resource) implements DataCatalog {
    @property.resource()
    dataset!: Schema.Dataset;
  }
  return DataCatalogClass
}

class DataCatalogImpl extends DataCatalogMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DataCatalog)
  }
}
DataCatalogMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataCatalog)
DataCatalogMixin.Class = DataCatalogImpl
