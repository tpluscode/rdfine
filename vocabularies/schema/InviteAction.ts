import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface InviteAction extends Schema.CommunicateAction, RdfResource {
  event: Schema.Event;
}

export default function InviteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InviteActionClass extends CommunicateActionMixin(Resource) implements InviteAction {
    @property.resource()
    event!: Schema.Event;
  }
  return InviteActionClass
}

class InviteActionImpl extends InviteActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.InviteAction)
  }
}
InviteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InviteAction)
InviteActionMixin.Class = InviteActionImpl
