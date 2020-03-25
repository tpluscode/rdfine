import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TransferActionMixin from './TransferAction';

export interface TakeAction extends Schema.TransferAction, RdfResource {
}

export default function TakeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TakeActionClass extends TransferActionMixin(Resource) implements TakeAction {
  }
  return TakeActionClass
}

class TakeActionImpl extends TakeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TakeAction>) {
    super(arg)
    this.types.add(schema.TakeAction)
    initializeProperties<TakeAction>(this, init)
  }
}
TakeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TakeAction)
TakeActionMixin.Class = TakeActionImpl
