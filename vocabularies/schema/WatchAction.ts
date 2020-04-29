import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ConsumeActionMixin } from './ConsumeAction';

export interface WatchAction extends Schema.ConsumeAction, RdfResource {
}

export function WatchActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WatchActionClass extends ConsumeActionMixin(Resource) implements WatchAction {
  }
  return WatchActionClass
}

class WatchActionImpl extends WatchActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WatchAction>) {
    super(arg, init)
    this.types.add(schema.WatchAction)
  }
}
WatchActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WatchAction)
WatchActionMixin.Class = WatchActionImpl
