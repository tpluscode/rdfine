import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface BuyAction extends Schema.TradeAction, RdfResource {
  seller: Schema.Organization | Schema.Person;
  vendor: Schema.Organization | Schema.Person;
  warrantyPromise: Schema.WarrantyPromise;
}

export default function BuyActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BuyActionClass extends TradeActionMixin(Resource) implements BuyAction {
    @property.resource()
    seller!: Schema.Organization | Schema.Person;
    @property.resource()
    vendor!: Schema.Organization | Schema.Person;
    @property.resource()
    warrantyPromise!: Schema.WarrantyPromise;
  }
  return BuyActionClass
}

class BuyActionImpl extends BuyActionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BuyAction)
  }
}
BuyActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BuyAction)
BuyActionMixin.Class = BuyActionImpl
