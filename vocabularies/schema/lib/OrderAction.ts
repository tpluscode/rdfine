import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TradeActionMixin } from './TradeAction.js';

export interface OrderAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, rdfine.RdfResource<D> {
  deliveryMethod: Schema.DeliveryMethod | undefined;
}

export function OrderActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OrderAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OrderActionClass extends TradeActionMixin(Resource) {
    @rdfine.property()
    deliveryMethod: Schema.DeliveryMethod | undefined;
  }
  return OrderActionClass as any
}

class OrderActionImpl extends OrderActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrderAction>) {
    super(arg, init)
    this.types.add(schema.OrderAction)
  }

  static readonly __mixins: Mixin[] = [OrderActionMixin, TradeActionMixin];
}
OrderActionMixin.appliesTo = schema.OrderAction
OrderActionMixin.Class = OrderActionImpl

export const fromPointer = createFactory<OrderAction>([TradeActionMixin, OrderActionMixin], { types: [schema.OrderAction] });
