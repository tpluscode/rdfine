import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReactActionMixin } from './ReactAction.js';

export interface LikeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, rdfine.RdfResource<D> {
}

export function LikeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LikeAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LikeActionClass extends ReactActionMixin(Resource) implements Partial<LikeAction> {
  }
  return LikeActionClass
}

class LikeActionImpl extends LikeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LikeAction>) {
    super(arg, init)
    this.types.add(schema.LikeAction)
  }

  static readonly __mixins: Mixin[] = [LikeActionMixin, ReactActionMixin];
}
LikeActionMixin.appliesTo = schema.LikeAction
LikeActionMixin.Class = LikeActionImpl

export const fromPointer = createFactory<LikeAction>([ReactActionMixin, LikeActionMixin], { types: [schema.LikeAction] });
