import '../extensions/rdfs/Datatype.js';
import { DatatypeMixinEx } from '../extensions/rdfs/Datatype.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { owl } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { DatatypeMixin as RdfsDatatypeMixin } from '@rdfine/rdfs/lib/Datatype';

export interface DataRange<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Datatype<D>, rdfine.RdfResource<D> {
}

export function DataRangeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DataRange & RdfResourceCore> & Base {
  @rdfine.namespace(owl)
  class DataRangeClass extends DatatypeMixinEx(RdfsDatatypeMixin(Resource)) {
  }
  return DataRangeClass as any
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

export const fromPointer = createFactory<DataRange>([RdfsDatatypeMixin, DataRangeMixin], { types: [owl.DataRange] });
