import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<TransferAction>) {
    super(arg, init)
    this.types.add(schema.TransferAction)
  }
}
TransferActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TransferAction)
TransferActionMixin.Class = TransferActionImpl
