import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<DataCatalog>) {
    super(arg)
    this.types.add(schema.DataCatalog)
    initializeProperties<DataCatalog>(this, init)
  }
}
DataCatalogMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DataCatalog)
DataCatalogMixin.Class = DataCatalogImpl
