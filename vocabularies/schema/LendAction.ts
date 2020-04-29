import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { TransferActionMixin } from './TransferAction';

export interface LendAction extends Schema.TransferAction, RdfResource {
  borrower: Schema.Person;
}

export function LendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LendActionClass extends TransferActionMixin(Resource) implements LendAction {
    @property.resource()
    borrower!: Schema.Person;
  }
  return LendActionClass
}

class LendActionImpl extends LendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LendAction>) {
    super(arg, init)
    this.types.add(schema.LendAction)
  }
}
LendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LendAction)
LendActionMixin.Class = LendActionImpl
