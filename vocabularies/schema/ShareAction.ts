import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CommunicateActionMixin from './CommunicateAction';

export interface ShareAction extends Schema.CommunicateAction, RdfResource {
}

export default function ShareActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ShareActionClass extends CommunicateActionMixin(Resource) implements ShareAction {
  }
  return ShareActionClass
}

class ShareActionImpl extends ShareActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<ShareAction>) {
    super(arg)
    this.types.add(schema.ShareAction)
    initializeProperties<ShareAction>(this, init)
  }
}
ShareActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ShareAction)
ShareActionMixin.Class = ShareActionImpl
