import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TradeActionMixin } from './TradeAction.js';

export interface DonateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, rdfine.RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function DonateActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DonateAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DonateActionClass extends TradeActionMixin(Resource) {
    @rdfine.property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return DonateActionClass as any
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

export const fromPointer = createFactory<DonateAction>([TradeActionMixin, DonateActionMixin], { types: [schema.DonateAction] });
