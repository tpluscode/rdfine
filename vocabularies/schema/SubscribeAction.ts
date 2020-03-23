import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface SubscribeAction extends Schema.InteractAction, RdfResource {
}

export default function SubscribeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SubscribeActionClass extends InteractActionMixin(Resource) implements SubscribeAction {
  }
  return SubscribeActionClass
}

class SubscribeActionImpl extends SubscribeActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SubscribeAction)
  }
}
SubscribeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SubscribeAction)
SubscribeActionMixin.Class = SubscribeActionImpl
