import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ExtentMixin } from './Extent';

export interface RecordResourceExtent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Extent<D>, RdfResource<D> {
}

export function RecordResourceExtentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecordResourceExtent> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordResourceExtentClass extends ExtentMixin(Resource) implements Partial<RecordResourceExtent> {
  }
  return RecordResourceExtentClass
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
