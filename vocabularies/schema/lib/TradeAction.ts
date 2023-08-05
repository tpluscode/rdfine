import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface TradeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  price: number | string | undefined;
  priceCurrency: string | undefined;
  priceSpecification: Schema.PriceSpecification<D> | undefined;
}

declare global {
  interface SchemaVocabulary {
    TradeAction: Factory<Schema.TradeAction>;
  }
}

export function TradeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TradeAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TradeActionClass extends ActionMixin(Resource) {
    @rdfine.property.literal()
    price: number | string | undefined;
    @rdfine.property.literal()
    priceCurrency: string | undefined;
    @rdfine.property.resource()
    priceSpecification: Schema.PriceSpecification | undefined;
  }
  return TradeActionClass as any
}
TradeActionMixin.appliesTo = schema.TradeAction
TradeActionMixin.createFactory = (env: RdfineEnvironment) => createFactory<TradeAction>([ActionMixin, TradeActionMixin], { types: [schema.TradeAction] }, env)
