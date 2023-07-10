import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TransferActionMixin } from './TransferAction.js';

export interface BorrowAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, rdfine.RdfResource<D> {
  lender: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function BorrowActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BorrowAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BorrowActionClass extends TransferActionMixin(Resource) {
    @rdfine.property.resource()
    lender: Schema.Organization | Schema.Person | undefined;
  }
  return BorrowActionClass as any
}

class BorrowActionImpl extends BorrowActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BorrowAction>) {
    super(arg, init)
    this.types.add(schema.BorrowAction)
  }

  static readonly __mixins: Mixin[] = [BorrowActionMixin, TransferActionMixin];
}
BorrowActionMixin.appliesTo = schema.BorrowAction
BorrowActionMixin.Class = BorrowActionImpl

export const fromPointer = createFactory<BorrowAction>([TransferActionMixin, BorrowActionMixin], { types: [schema.BorrowAction] });
