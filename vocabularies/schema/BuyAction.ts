import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TradeActionMixin } from './TradeAction';

export interface BuyAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, RdfResource<D> {
  seller: Schema.Organization<D> | Schema.Person<D> | undefined;
  vendor: Schema.Organization<D> | Schema.Person<D> | undefined;
  warrantyPromise: Schema.WarrantyPromise<D> | undefined;
}

export function BuyActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BuyActionClass extends TradeActionMixin(Resource) implements BuyAction {
    @property.resource()
    seller: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    vendor: Schema.Organization | Schema.Person | undefined;
    @property.resource()
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
