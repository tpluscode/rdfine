import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReactActionMixin } from './ReactAction.js';

export interface DisagreeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, rdfine.RdfResource<D> {
}

export function DisagreeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DisagreeAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DisagreeActionClass extends ReactActionMixin(Resource) {
  }
  return DisagreeActionClass as any
}

class DisagreeActionImpl extends DisagreeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DisagreeAction>) {
    super(arg, init)
    this.types.add(schema.DisagreeAction)
  }

  static readonly __mixins: Mixin[] = [DisagreeActionMixin, ReactActionMixin];
}
DisagreeActionMixin.appliesTo = schema.DisagreeAction
DisagreeActionMixin.Class = DisagreeActionImpl

export const fromPointer = createFactory<DisagreeAction>([ReactActionMixin, DisagreeActionMixin], { types: [schema.DisagreeAction] });
