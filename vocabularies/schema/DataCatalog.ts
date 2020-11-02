import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface DataCatalog<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  dataset: Schema.Dataset<D> | undefined;
  measurementTechnique: string | undefined;
  measurementTechniqueTerm: RDF.NamedNode | undefined;
}

export function DataCatalogMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DataCatalogClass extends CreativeWorkMixin(Resource) implements DataCatalog {
    @property.resource()
    dataset: Schema.Dataset | undefined;
    @property.literal()
    measurementTechnique: string | undefined;
    @property({ path: schema.measurementTechnique })
    measurementTechniqueTerm: RDF.NamedNode | undefined;
  }
  return DataCatalogClass
}

class DataCatalogImpl extends DataCatalogMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DataCatalog>) {
    super(arg, init)
    this.types.add(schema.DataCatalog)
  }

  static readonly __mixins: Mixin[] = [DataCatalogMixin, CreativeWorkMixin];
}
DataCatalogMixin.appliesTo = schema.DataCatalog
DataCatalogMixin.Class = DataCatalogImpl
