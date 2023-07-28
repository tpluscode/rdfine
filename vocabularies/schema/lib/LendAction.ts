import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TransferActionMixin } from './TransferAction.js';

export interface LendAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, rdfine.RdfResource<D> {
  borrower: Schema.Person<D> | undefined;
}

export function LendActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LendAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LendActionClass extends TransferActionMixin(Resource) {
    @rdfine.property.resource()
    borrower: Schema.Person | undefined;
  }
  return LendActionClass as any
}

class LendActionImpl extends LendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LendAction>) {
    super(arg, init)
    this.types.add(schema.LendAction)
  }

  static readonly __mixins: Mixin[] = [LendActionMixin, TransferActionMixin];
}
LendActionMixin.appliesTo = schema.LendAction
LendActionMixin.Class = LendActionImpl

export const fromPointer = createFactory<LendAction>([TransferActionMixin, LendActionMixin], { types: [schema.LendAction] });
