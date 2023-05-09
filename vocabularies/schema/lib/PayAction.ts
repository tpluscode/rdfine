import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TradeActionMixin } from './TradeAction.js';

export interface PayAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, rdfine.RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function PayActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PayAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PayActionClass extends TradeActionMixin(Resource) implements Partial<PayAction> {
    @rdfine.property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return PayActionClass
}

class PayActionImpl extends PayActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PayAction>) {
    super(arg, init)
    this.types.add(schema.PayAction)
  }

  static readonly __mixins: Mixin[] = [PayActionMixin, TradeActionMixin];
}
PayActionMixin.appliesTo = schema.PayAction
PayActionMixin.Class = PayActionImpl

export const fromPointer = createFactory<PayAction>([TradeActionMixin, PayActionMixin], { types: [schema.PayAction] });
