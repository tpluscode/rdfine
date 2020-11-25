import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TradeActionMixin } from './TradeAction';

export interface PreOrderAction<ID extends ResourceNode = ResourceNode> extends Schema.TradeAction<ID>, RdfResource<ID> {
}

export function PreOrderActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PreOrderActionClass extends TradeActionMixin(Resource) implements PreOrderAction {
  }
  return PreOrderActionClass
}

class PreOrderActionImpl extends PreOrderActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PreOrderAction>) {
    super(arg, init)
    this.types.add(schema.PreOrderAction)
  }

  static readonly __mixins: Mixin[] = [PreOrderActionMixin, TradeActionMixin];
}
PreOrderActionMixin.appliesTo = schema.PreOrderAction
PreOrderActionMixin.Class = PreOrderActionImpl
