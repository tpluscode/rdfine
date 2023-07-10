import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ExtentMixin } from './Extent.js';

export interface RecordResourceExtent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Extent<D>, rdfine.RdfResource<D> {
}

export function RecordResourceExtentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RecordResourceExtent & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordResourceExtentClass extends ExtentMixin(Resource) {
  }
  return RecordResourceExtentClass as any
}

class RecordResourceExtentImpl extends RecordResourceExtentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordResourceExtent>) {
    super(arg, init)
    this.types.add(rico.RecordResourceExtent)
  }

  static readonly __mixins: Mixin[] = [RecordResourceExtentMixin, ExtentMixin];
}
RecordResourceExtentMixin.appliesTo = rico.RecordResourceExtent
RecordResourceExtentMixin.Class = RecordResourceExtentImpl

export const fromPointer = createFactory<RecordResourceExtent>([ExtentMixin, RecordResourceExtentMixin], { types: [rico.RecordResourceExtent] });
