import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TransferActionMixin } from './TransferAction.js';

export interface TakeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, RdfResource<D> {
}

export function TakeActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TakeAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class TakeActionClass extends TransferActionMixin(Resource) implements Partial<TakeAction> {
  }
  return TakeActionClass
}

class TakeActionImpl extends TakeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TakeAction>) {
    super(arg, init)
    this.types.add(schema.TakeAction)
  }

  static readonly __mixins: Mixin[] = [TakeActionMixin, TransferActionMixin];
}
TakeActionMixin.appliesTo = schema.TakeAction
TakeActionMixin.Class = TakeActionImpl

export const fromPointer = createFactory<TakeAction>([TransferActionMixin, TakeActionMixin], { types: [schema.TakeAction] });
