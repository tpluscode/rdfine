import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TradeActionMixin } from './TradeAction';

export interface RentAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, RdfResource<D> {
  landlord: Schema.Organization<D> | Schema.Person<D> | undefined;
  realEstateAgent: Schema.RealEstateAgent<D> | undefined;
}

export function RentActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RentAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class RentActionClass extends TradeActionMixin(Resource) implements Partial<RentAction> {
    @property.resource()
    landlord: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    realEstateAgent: Schema.RealEstateAgent | undefined;
  }
  return RentActionClass
}

class RentActionImpl extends RentActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RentAction>) {
    super(arg, init)
    this.types.add(schema.RentAction)
  }

  static readonly __mixins: Mixin[] = [RentActionMixin, TradeActionMixin];
}
RentActionMixin.appliesTo = schema.RentAction
RentActionMixin.Class = RentActionImpl

export const fromPointer = createFactory<RentAction>([TradeActionMixin, RentActionMixin], { types: [schema.RentAction] });
