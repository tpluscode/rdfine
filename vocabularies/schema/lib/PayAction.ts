import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TradeActionMixin } from './TradeAction';

export interface PayAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function PayActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PayAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class PayActionClass extends TradeActionMixin(Resource) implements Partial<PayAction> {
    @property.resource()
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
