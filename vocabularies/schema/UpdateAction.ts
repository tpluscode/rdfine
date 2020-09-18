import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface UpdateAction extends Schema.Action, RdfResource {
  collection: Schema.Thing | undefined;
  targetCollection: Schema.Thing | undefined;
}

export function UpdateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UpdateActionClass extends ActionMixin(Resource) implements UpdateAction {
    @property.resource()
    collection: Schema.Thing | undefined;
    @property.resource()
    targetCollection: Schema.Thing | undefined;
  }
  return UpdateActionClass
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
