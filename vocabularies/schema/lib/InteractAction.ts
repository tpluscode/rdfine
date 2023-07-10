import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface InteractAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
}

export function InteractActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<InteractAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InteractActionClass extends ActionMixin(Resource) {
  }
  return InteractActionClass as any
}

class InteractActionImpl extends InteractActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InteractAction>) {
    super(arg, init)
    this.types.add(schema.InteractAction)
  }

  static readonly __mixins: Mixin[] = [InteractActionMixin, ActionMixin];
}
InteractActionMixin.appliesTo = schema.InteractAction
InteractActionMixin.Class = InteractActionImpl

export const fromPointer = createFactory<InteractAction>([ActionMixin, InteractActionMixin], { types: [schema.InteractAction] });
