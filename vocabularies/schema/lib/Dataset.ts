import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Dataset<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
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

export function DatasetMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Dataset & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DatasetClass extends CreativeWorkMixin(Resource) {
    @rdfine.property.resource()
    catalog: Schema.DataCatalog | undefined;
    @rdfine.property.literal({ type: Date })
    datasetTimeInterval: Date | undefined;
    @rdfine.property.resource()
    distribution: Schema.DataDownload | undefined;
    @rdfine.property.resource()
    includedDataCatalog: Schema.DataCatalog | undefined;
    @rdfine.property.resource()
    includedInDataCatalog: Schema.DataCatalog | undefined;
    @rdfine.property.literal()
    issn: string | undefined;
    @rdfine.property.literal()
    measurementTechnique: string | undefined;
    @rdfine.property({ path: schema.measurementTechnique })
    measurementTechniqueTerm: RDF.NamedNode | undefined;
    @rdfine.property.resource()
    variableMeasured: Schema.PropertyValue | undefined;
    @rdfine.property.literal({ path: schema.variableMeasured })
    variableMeasuredLiteral: string | undefined;
  }
  return DatasetClass as any
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

export const fromPointer = createFactory<Dataset>([CreativeWorkMixin, DatasetMixin], { types: [schema.Dataset] });
