import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<SubscribeAction>) {
    super(arg, init)
    this.types.add(schema.SubscribeAction)
  }
}
SubscribeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SubscribeAction)
SubscribeActionMixin.Class = SubscribeActionImpl
