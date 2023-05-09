import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ConsumeActionMixin } from './ConsumeAction.js';

export interface WatchAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ConsumeAction<D>, rdfine.RdfResource<D> {
}

export function WatchActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<WatchAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WatchActionClass extends ConsumeActionMixin(Resource) implements Partial<WatchAction> {
  }
  return WatchActionClass
}

class WatchActionImpl extends WatchActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WatchAction>) {
    super(arg, init)
    this.types.add(schema.WatchAction)
  }

  static readonly __mixins: Mixin[] = [WatchActionMixin, ConsumeActionMixin];
}
WatchActionMixin.appliesTo = schema.WatchAction
WatchActionMixin.Class = WatchActionImpl

export const fromPointer = createFactory<WatchAction>([ConsumeActionMixin, WatchActionMixin], { types: [schema.WatchAction] });
