import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface AssessAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
}

export function AssessActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AssessAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AssessActionClass extends ActionMixin(Resource) {
  }
  return AssessActionClass as any
}

class AssessActionImpl extends AssessActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AssessAction>) {
    super(arg, init)
    this.types.add(schema.AssessAction)
  }

  static readonly __mixins: Mixin[] = [AssessActionMixin, ActionMixin];
}
AssessActionMixin.appliesTo = schema.AssessAction
AssessActionMixin.Class = AssessActionImpl

export const fromPointer = createFactory<AssessAction>([ActionMixin, AssessActionMixin], { types: [schema.AssessAction] });
