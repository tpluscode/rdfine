import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TradeActionMixin } from './TradeAction.js';

export interface PreOrderAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TradeAction<D>, rdfine.RdfResource<D> {
}

export function PreOrderActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PreOrderAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PreOrderActionClass extends TradeActionMixin(Resource) {
  }
  return PreOrderActionClass as any
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

export const fromPointer = createFactory<PreOrderAction>([TradeActionMixin, PreOrderActionMixin], { types: [schema.PreOrderAction] });
