import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface InformAction extends Schema.CommunicateAction, RdfResource {
  event: Schema.Event;
}

export default function InformActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InformActionClass extends CommunicateActionMixin(Resource) implements InformAction {
    @property.resource()
    event!: Schema.Event;
  }
  return InformActionClass
}

class InformActionImpl extends InformActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.InformAction)
  }
}
InformActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InformAction)
InformActionMixin.Class = InformActionImpl
