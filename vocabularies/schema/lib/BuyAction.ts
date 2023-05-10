import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TradeActionMixin } from './TradeAction.js';

export interface BuyAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, rdfine.RdfResource<D> {
  seller: Schema.Organization<D> | Schema.Person<D> | undefined;
  vendor: Schema.Organization<D> | Schema.Person<D> | undefined;
  warrantyPromise: Schema.WarrantyPromise<D> | undefined;
}

export function BuyActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BuyAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BuyActionClass extends TradeActionMixin(Resource) implements Partial<BuyAction> {
    @rdfine.property.resource()
    seller: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    vendor: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    warrantyPromise: Schema.WarrantyPromise | undefined;
  }
  return BuyActionClass
}

class BuyActionImpl extends BuyActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BuyAction>) {
    super(arg, init)
    this.types.add(schema.BuyAction)
  }

  static readonly __mixins: Mixin[] = [BuyActionMixin, TradeActionMixin];
}
BuyActionMixin.appliesTo = schema.BuyAction
BuyActionMixin.Class = BuyActionImpl

export const fromPointer = createFactory<BuyAction>([TradeActionMixin, BuyActionMixin], { types: [schema.BuyAction] });
