import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TransferActionMixin from './TransferAction';

export interface LendAction extends Schema.TransferAction, RdfResource {
  borrower: Schema.Person;
}

export default function LendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LendActionClass extends TransferActionMixin(Resource) implements LendAction {
    @property.resource()
    borrower!: Schema.Person;
  }
  return LendActionClass
}

class LendActionImpl extends LendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<LendAction>) {
    super(arg)
    this.types.add(schema.LendAction)
    initializeProperties(this, init)
  }
}
LendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LendAction)
LendActionMixin.Class = LendActionImpl
