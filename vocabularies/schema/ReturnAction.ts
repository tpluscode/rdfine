import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TransferActionMixin from './TransferAction';

export interface ReturnAction extends Schema.TransferAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export default function ReturnActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReturnActionClass extends TransferActionMixin(Resource) implements ReturnAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return ReturnActionClass
}

class ReturnActionImpl extends ReturnActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReturnAction>) {
    super(arg, init)
    this.types.add(schema.ReturnAction)
  }
}
ReturnActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReturnAction)
ReturnActionMixin.Class = ReturnActionImpl
