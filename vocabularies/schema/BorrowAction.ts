import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { TransferActionMixin } from './TransferAction';

export interface BorrowAction extends Schema.TransferAction, RdfResource {
  lender: Schema.Organization | Schema.Person;
}

export function BorrowActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BorrowActionClass extends TransferActionMixin(Resource) implements BorrowAction {
    @property.resource()
    lender!: Schema.Organization | Schema.Person;
  }
  return BorrowActionClass
}

class BorrowActionImpl extends BorrowActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BorrowAction>) {
    super(arg, init)
    this.types.add(schema.BorrowAction)
  }
}
BorrowActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BorrowAction)
BorrowActionMixin.Class = BorrowActionImpl
