import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TradeActionMixin } from './TradeAction';

export interface DonateAction extends Schema.TradeAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export function DonateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DonateActionClass extends TradeActionMixin(Resource) implements DonateAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return DonateActionClass
}

class DonateActionImpl extends DonateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DonateAction>) {
    super(arg, init)
    this.types.add(schema.DonateAction)
  }

  static readonly __mixins: Mixin[] = [DonateActionMixin, TradeActionMixin];
}
DonateActionMixin.appliesTo = schema.DonateAction
DonateActionMixin.Class = DonateActionImpl
