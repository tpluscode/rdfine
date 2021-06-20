import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TransferActionMixin } from './TransferAction';

export interface BorrowAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TransferAction<D>, RdfResource<D> {
  lender: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function BorrowActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BorrowAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class BorrowActionClass extends TransferActionMixin(Resource) implements Partial<BorrowAction> {
    @property.resource()
    lender: Schema.Organization | Schema.Person | undefined;
  }
  return BorrowActionClass
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
