import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SellAction)
  }
}
SellActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SellAction)
SellActionMixin.Class = SellActionImpl
