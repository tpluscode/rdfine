import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { DatatypeMixin as RdfsDatatypeMixin } from '@rdfine/rdfs/lib/Datatype';

export interface DataRange<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Datatype<D>, RdfResource<D> {
}

export function DataRangeMixin<Base extends Constructor>(Resource: Base): Constructor<DataRange> & Base {
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

  static readonly __mixins: Mixin[] = [DataRangeMixin, RdfsDatatypeMixin];
}
DataRangeMixin.appliesTo = owl.DataRange
DataRangeMixin.Class = DataRangeImpl
