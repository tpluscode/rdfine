import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface SellAction extends Schema.TradeAction, RdfResource {
  buyer: Schema.Person;
  warrantyPromise: Schema.WarrantyPromise;
}

export default function SellActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SellActionClass extends TradeActionMixin(Resource) implements SellAction {
    @property.resource()
    buyer!: Schema.Person;
    @property.resource()
    warrantyPromise!: Schema.WarrantyPromise;
  }
  return SellActionClass
}

class SellActionImpl extends SellActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SellAction>) {
    super(arg)
    this.types.add(schema.SellAction)
    initializeProperties<SellAction>(this, init)
  }
}
SellActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SellAction)
SellActionMixin.Class = SellActionImpl
