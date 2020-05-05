import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TradeActionMixin } from './TradeAction';

export interface BuyAction extends Schema.TradeAction, RdfResource {
  seller: Schema.Organization | Schema.Person;
  vendor: Schema.Organization | Schema.Person;
  warrantyPromise: Schema.WarrantyPromise;
}

export function BuyActionMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<BuyAction>) {
    super(arg, init)
    this.types.add(schema.BuyAction)
  }

  static readonly __mixins: Mixin[] = [BuyActionMixin, TradeActionMixin];
}
BuyActionMixin.appliesTo = schema.BuyAction
BuyActionMixin.Class = BuyActionImpl
