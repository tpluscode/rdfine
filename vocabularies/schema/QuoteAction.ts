import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TradeActionMixin from './TradeAction';

export interface QuoteAction extends Schema.TradeAction, RdfResource {
}

export default function QuoteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuoteActionClass extends TradeActionMixin(Resource) implements QuoteAction {
  }
  return QuoteActionClass
}

class QuoteActionImpl extends QuoteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<QuoteAction>) {
    super(arg)
    this.types.add(schema.QuoteAction)
    initializeProperties(this, init)
  }
}
QuoteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.QuoteAction)
QuoteActionMixin.Class = QuoteActionImpl
