import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface ControlAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
}

export function ControlActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ControlAction> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ControlActionClass extends ActionMixin(Resource) implements Partial<ControlAction> {
  }
  return ControlActionClass
}

class ControlActionImpl extends ControlActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ControlAction>) {
    super(arg, init)
    this.types.add(schema.ControlAction)
  }

  static readonly __mixins: Mixin[] = [ControlActionMixin, ActionMixin];
}
ControlActionMixin.appliesTo = schema.ControlAction
ControlActionMixin.Class = ControlActionImpl

export const fromPointer = createFactory<ControlAction>([ActionMixin, ControlActionMixin], { types: [schema.ControlAction] });
