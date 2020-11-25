import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TradeActionMixin } from './TradeAction';

export interface SellAction<ID extends ResourceNode = ResourceNode> extends Schema.TradeAction<ID>, RdfResource<ID> {
  buyer: Schema.Person<SiblingNode<ID>> | undefined;
  warrantyPromise: Schema.WarrantyPromise<SiblingNode<ID>> | undefined;
}

export function SellActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SellActionClass extends TradeActionMixin(Resource) implements SellAction {
    @property.resource()
    buyer: Schema.Person | undefined;
    @property.resource()
    warrantyPromise: Schema.WarrantyPromise | undefined;
  }
  return SellActionClass
}

class SellActionImpl extends SellActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SellAction>) {
    super(arg, init)
    this.types.add(schema.SellAction)
  }

  static readonly __mixins: Mixin[] = [SellActionMixin, TradeActionMixin];
}
SellActionMixin.appliesTo = schema.SellAction
SellActionMixin.Class = SellActionImpl
