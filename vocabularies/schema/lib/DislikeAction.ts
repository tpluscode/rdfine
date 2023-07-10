import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReactActionMixin } from './ReactAction.js';

export interface DislikeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, rdfine.RdfResource<D> {
}

export function DislikeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DislikeAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DislikeActionClass extends ReactActionMixin(Resource) {
  }
  return DislikeActionClass as any
}

class DislikeActionImpl extends DislikeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DislikeAction>) {
    super(arg, init)
    this.types.add(schema.DislikeAction)
  }

  static readonly __mixins: Mixin[] = [DislikeActionMixin, ReactActionMixin];
}
DislikeActionMixin.appliesTo = schema.DislikeAction
DislikeActionMixin.Class = DislikeActionImpl

export const fromPointer = createFactory<DislikeAction>([ReactActionMixin, DislikeActionMixin], { types: [schema.DislikeAction] });
