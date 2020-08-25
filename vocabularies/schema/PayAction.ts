import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TradeActionMixin } from './TradeAction';

export interface PayAction extends Schema.TradeAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export function PayActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PayActionClass extends TradeActionMixin(Resource) implements PayAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
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
