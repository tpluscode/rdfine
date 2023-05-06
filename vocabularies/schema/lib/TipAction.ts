import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TradeActionMixin } from './TradeAction.js';

export interface TipAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function TipActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TipAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class TipActionClass extends TradeActionMixin(Resource) implements Partial<TipAction> {
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

export const fromPointer = createFactory<TipAction>([TradeActionMixin, TipActionMixin], { types: [schema.TipAction] });
