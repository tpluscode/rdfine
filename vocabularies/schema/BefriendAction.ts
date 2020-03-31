import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BefriendAction>) {
    super(arg, init)
    this.types.add(schema.BefriendAction)
  }
}
BefriendActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BefriendAction)
BefriendActionMixin.Class = BefriendActionImpl
