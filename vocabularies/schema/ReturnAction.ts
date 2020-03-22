import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ReturnAction)
  }
}
ReturnActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ReturnAction)
ReturnActionMixin.Class = ReturnActionImpl
