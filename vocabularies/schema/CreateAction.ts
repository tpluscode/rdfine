import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface CreateAction extends Schema.Action, RdfResource {
}

export function CreateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CreateActionClass extends ActionMixin(Resource) implements CreateAction {
  }
  return CreateActionClass
}

class CreateActionImpl extends CreateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CreateAction>) {
    super(arg, init)
    this.types.add(schema.CreateAction)
  }

  static readonly __mixins: Mixin[] = [CreateActionMixin, ActionMixin];
}
CreateActionMixin.appliesTo = schema.CreateAction
CreateActionMixin.Class = CreateActionImpl
