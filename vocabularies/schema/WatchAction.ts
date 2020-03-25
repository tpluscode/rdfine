import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ConsumeActionMixin from './ConsumeAction';

export interface WatchAction extends Schema.ConsumeAction, RdfResource {
}

export default function WatchActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WatchActionClass extends ConsumeActionMixin(Resource) implements WatchAction {
  }
  return WatchActionClass
}

class WatchActionImpl extends WatchActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<WatchAction>) {
    super(arg)
    this.types.add(schema.WatchAction)
    initializeProperties<WatchAction>(this, init)
  }
}
WatchActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WatchAction)
WatchActionMixin.Class = WatchActionImpl
