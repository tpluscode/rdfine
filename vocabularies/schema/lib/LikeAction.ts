import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReactActionMixin } from './ReactAction';

export interface LikeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, RdfResource<D> {
}

export function LikeActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LikeAction> & RdfResourceCore> & Base {
  @namespace(schema)
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
