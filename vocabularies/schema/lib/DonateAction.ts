import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TradeActionMixin } from './TradeAction';

export interface DonateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function DonateActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DonateAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class DonateActionClass extends TradeActionMixin(Resource) implements Partial<DonateAction> {
    @property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
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

export const fromPointer = createFactory<DonateAction>([TradeActionMixin, DonateActionMixin], { types: [schema.DonateAction] });
