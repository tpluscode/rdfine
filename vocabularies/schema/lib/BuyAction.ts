import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TradeActionMixin } from './TradeAction';

export interface BuyAction<ID extends ResourceNode = ResourceNode> extends Schema.TradeAction<ID>, RdfResource<ID> {
  seller: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  vendor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  warrantyPromise: Schema.WarrantyPromise<SiblingNode<ID>> | undefined;
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
