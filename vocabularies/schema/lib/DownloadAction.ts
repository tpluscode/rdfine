import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TransferActionMixin } from './TransferAction.js';

export interface DownloadAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, rdfine.RdfResource<D> {
}

export function DownloadActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DownloadAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DownloadActionClass extends TransferActionMixin(Resource) {
  }
  return DownloadActionClass as any
}

class DownloadActionImpl extends DownloadActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DownloadAction>) {
    super(arg, init)
    this.types.add(schema.DownloadAction)
  }

  static readonly __mixins: Mixin[] = [DownloadActionMixin, TransferActionMixin];
}
DownloadActionMixin.appliesTo = schema.DownloadAction
DownloadActionMixin.Class = DownloadActionImpl

export const fromPointer = createFactory<DownloadAction>([TransferActionMixin, DownloadActionMixin], { types: [schema.DownloadAction] });
