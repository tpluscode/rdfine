import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface UpdateAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
  collection: Schema.Thing<D> | undefined;
  targetCollection: Schema.Thing<D> | undefined;
}

export function UpdateActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<UpdateAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UpdateActionClass extends ActionMixin(Resource) {
    @rdfine.property.resource()
    collection: Schema.Thing | undefined;
    @rdfine.property.resource()
    targetCollection: Schema.Thing | undefined;
  }
  return UpdateActionClass as any
}

class UpdateActionImpl extends UpdateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UpdateAction>) {
    super(arg, init)
    this.types.add(schema.UpdateAction)
  }

  static readonly __mixins: Mixin[] = [UpdateActionMixin, ActionMixin];
}
UpdateActionMixin.appliesTo = schema.UpdateAction
UpdateActionMixin.Class = UpdateActionImpl

export const fromPointer = createFactory<UpdateAction>([ActionMixin, UpdateActionMixin], { types: [schema.UpdateAction] });
