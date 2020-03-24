import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import InteractActionMixin from './InteractAction';

export interface BefriendAction extends Schema.InteractAction, RdfResource {
}

export default function BefriendActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BefriendActionClass extends InteractActionMixin(Resource) implements BefriendAction {
  }
  return BefriendActionClass
}

class BefriendActionImpl extends BefriendActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BefriendAction>) {
    super(arg)
    this.types.add(schema.BefriendAction)
    initializeProperties(this, init)
  }
}
BefriendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BefriendAction)
BefriendActionMixin.Class = BefriendActionImpl
