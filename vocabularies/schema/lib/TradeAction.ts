import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface TradeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
  price: number | string | undefined;
  priceCurrency: string | undefined;
  priceSpecification: Schema.PriceSpecification<D> | undefined;
}

export function TradeActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TradeAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class TradeActionClass extends ActionMixin(Resource) implements Partial<TradeAction> {
    @property.literal()
    price: number | string | undefined;
    @property.literal()
    priceCurrency: string | undefined;
    @property.resource()
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
