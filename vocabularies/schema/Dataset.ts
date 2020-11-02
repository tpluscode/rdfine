import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Dataset<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  catalog: Schema.DataCatalog<D> | undefined;
  datasetTimeInterval: Date | undefined;
  distribution: Schema.DataDownload<D> | undefined;
  includedDataCatalog: Schema.DataCatalog<D> | undefined;
  includedInDataCatalog: Schema.DataCatalog<D> | undefined;
  issn: string | undefined;
  measurementTechnique: string | undefined;
  measurementTechniqueTerm: RDF.NamedNode | undefined;
  variableMeasured: Schema.PropertyValue<D> | undefined;
  variableMeasuredLiteral: string | undefined;
}

export function DatasetMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DatasetClass extends CreativeWorkMixin(Resource) implements Dataset {
    @property.resource()
    catalog: Schema.DataCatalog | undefined;
    @property.literal({ type: Date })
    datasetTimeInterval: Date | undefined;
    @property.resource()
    distribution: Schema.DataDownload | undefined;
    @property.resource()
    includedDataCatalog: Schema.DataCatalog | undefined;
    @property.resource()
    includedInDataCatalog: Schema.DataCatalog | undefined;
    @property.literal()
    issn: string | undefined;
    @property.literal()
    measurementTechnique: string | undefined;
    @property({ path: schema.measurementTechnique })
    measurementTechniqueTerm: RDF.NamedNode | undefined;
    @property.resource()
    variableMeasured: Schema.PropertyValue | undefined;
    @property.literal({ path: schema.variableMeasured })
    variableMeasuredLiteral: string | undefined;
  }
  return DatasetClass
}

class DatasetImpl extends DatasetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Dataset>) {
    super(arg, init)
    this.types.add(schema.Dataset)
  }

  static readonly __mixins: Mixin[] = [DatasetMixin, CreativeWorkMixin];
}
DatasetMixin.appliesTo = schema.Dataset
DatasetMixin.Class = DatasetImpl
