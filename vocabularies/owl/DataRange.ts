import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface DataRange extends Rdfs.Datatype, RdfResource {
}

export function DataRangeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class DataRangeClass extends Rdfs.DatatypeMixin(Resource) implements DataRange {
  }
  return DataRangeClass
}

class DataRangeImpl extends DataRangeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DataRange>) {
    super(arg, init)
    this.types.add(owl.DataRange)
  }

  static readonly __mixins: Mixin[] = [DataRangeMixin, Rdfs.DatatypeMixin];
}
DataRangeMixin.appliesTo = owl.DataRange
DataRangeMixin.Class = DataRangeImpl
