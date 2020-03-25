import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface TransferAction extends Schema.Action, RdfResource {
  fromLocation: Schema.Place;
  toLocation: Schema.Place;
}

export default function TransferActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TransferActionClass extends ActionMixin(Resource) implements TransferAction {
    @property.resource()
    fromLocation!: Schema.Place;
    @property.resource()
    toLocation!: Schema.Place;
  }
  return TransferActionClass
}

class TransferActionImpl extends TransferActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TransferAction>) {
    super(arg)
    this.types.add(schema.TransferAction)
    initializeProperties<TransferAction>(this, init)
  }
}
TransferActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TransferAction)
TransferActionMixin.Class = TransferActionImpl
