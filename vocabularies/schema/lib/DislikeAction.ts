import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReactActionMixin } from './ReactAction.js';

export interface DislikeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, RdfResource<D> {
}

export function DislikeActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DislikeAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class DislikeActionClass extends ReactActionMixin(Resource) implements Partial<DislikeAction> {
  }
  return DislikeActionClass
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
