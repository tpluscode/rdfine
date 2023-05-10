import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TradeActionMixin } from './TradeAction.js';

export interface RentAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, rdfine.RdfResource<D> {
  landlord: Schema.Organization<D> | Schema.Person<D> | undefined;
  realEstateAgent: Schema.RealEstateAgent<D> | undefined;
}

export function RentActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RentAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RentActionClass extends TradeActionMixin(Resource) implements Partial<RentAction> {
    @rdfine.property.resource()
    landlord: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
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
