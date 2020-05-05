import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TradeActionMixin } from './TradeAction';

export interface TipAction extends Schema.TradeAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export function TipActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TipActionClass extends TradeActionMixin(Resource) implements TipAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
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
