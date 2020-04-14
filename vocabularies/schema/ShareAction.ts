import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ShareAction>) {
    super(arg, init)
    this.types.add(schema.ShareAction)
  }
}
ShareActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ShareAction)
ShareActionMixin.Class = ShareActionImpl
