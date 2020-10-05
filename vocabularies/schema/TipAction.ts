import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TradeActionMixin } from './TradeAction';

export interface TipAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function TipActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TipActionClass extends TradeActionMixin(Resource) implements TipAction {
    @property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return TipActionClass
}

class TipActionImpl extends TipActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TipAction>) {
    super(arg, init)
    this.types.add(schema.TipAction)
  }

  static readonly __mixins: Mixin[] = [TipActionMixin, TradeActionMixin];
}
TipActionMixin.appliesTo = schema.TipAction
TipActionMixin.Class = TipActionImpl
