import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.QuoteAction)
  }
}
QuoteActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.QuoteAction)
QuoteActionMixin.Class = QuoteActionImpl
