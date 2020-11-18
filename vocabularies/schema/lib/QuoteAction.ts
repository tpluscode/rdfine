import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TradeActionMixin } from './TradeAction';

export interface QuoteAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, RdfResource<D> {
}

export function QuoteActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuoteActionClass extends TradeActionMixin(Resource) implements QuoteAction {
  }
  return QuoteActionClass
}

class QuoteActionImpl extends QuoteActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<QuoteAction>) {
    super(arg, init)
    this.types.add(schema.QuoteAction)
  }

  static readonly __mixins: Mixin[] = [QuoteActionMixin, TradeActionMixin];
}
QuoteActionMixin.appliesTo = schema.QuoteAction
QuoteActionMixin.Class = QuoteActionImpl
