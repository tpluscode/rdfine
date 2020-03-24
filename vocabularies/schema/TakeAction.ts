import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TakeAction)
  }
}
TakeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TakeAction)
TakeActionMixin.Class = TakeActionImpl
