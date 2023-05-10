import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface TradeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  price: number | string | undefined;
  priceCurrency: string | undefined;
  priceSpecification: Schema.PriceSpecification<D> | undefined;
}

export function TradeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TradeAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TradeActionClass extends ActionMixin(Resource) implements Partial<TradeAction> {
    @rdfine.property.literal()
    price: number | string | undefined;
    @rdfine.property.literal()
    priceCurrency: string | undefined;
    @rdfine.property.resource()
    priceSpecification: Schema.PriceSpecification | undefined;
  }
  return TradeActionClass
}

class TradeActionImpl extends TradeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TradeAction>) {
    super(arg, init)
    this.types.add(schema.TradeAction)
  }

  static readonly __mixins: Mixin[] = [TradeActionMixin, ActionMixin];
}
TradeActionMixin.appliesTo = schema.TradeAction
TradeActionMixin.Class = TradeActionImpl

export const fromPointer = createFactory<TradeAction>([ActionMixin, TradeActionMixin], { types: [schema.TradeAction] });
