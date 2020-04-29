import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { DatatypeMixin as RdfsDatatypeMixin } from '@rdfine/rdfs/Datatype';

export interface DataRange extends Rdfs.Datatype, RdfResource {
}

export function DataRangeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DataRangeClass extends RdfsDatatypeMixin(Resource) implements DataRange {
  }
  return DataRangeClass
}

class DataRangeImpl extends DataRangeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DataRange>) {
    super(arg, init)
    this.types.add(owl.DataRange)
  }
}
DataRangeMixin.shouldApply = (r: RdfResource) => r.types.has(owl.DataRange)
DataRangeMixin.Class = DataRangeImpl
