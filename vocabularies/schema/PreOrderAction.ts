import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface PreOrderAction extends Schema.TradeAction, RdfResource {
}

export default function PreOrderActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PreOrderActionClass extends TradeActionMixin(Resource) implements PreOrderAction {
  }
  return PreOrderActionClass
}

class PreOrderActionImpl extends PreOrderActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PreOrderAction>) {
    super(arg, init)
    this.types.add(schema.PreOrderAction)
  }
}
PreOrderActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PreOrderAction)
PreOrderActionMixin.Class = PreOrderActionImpl
