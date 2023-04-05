import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface InteractAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, RdfResource<D> {
}

export function InteractActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InteractAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class InteractActionClass extends ActionMixin(Resource) implements Partial<InteractAction> {
  }
  return InteractActionClass
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
