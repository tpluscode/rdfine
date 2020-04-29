import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { TransferActionMixin } from './TransferAction';

export interface TakeAction extends Schema.TransferAction, RdfResource {
}

export function TakeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TakeActionClass extends TransferActionMixin(Resource) implements TakeAction {
  }
  return TakeActionClass
}

class TakeActionImpl extends TakeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TakeAction>) {
    super(arg, init)
    this.types.add(schema.TakeAction)
  }
}
TakeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TakeAction)
TakeActionMixin.Class = TakeActionImpl
