import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { UpdateActionMixin } from './UpdateAction';

export interface AddAction extends Schema.UpdateAction, RdfResource {
}

export function AddActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AddActionClass extends UpdateActionMixin(Resource) implements AddAction {
  }
  return AddActionClass
}

class AddActionImpl extends AddActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AddAction>) {
    super(arg, init)
    this.types.add(schema.AddAction)
  }

  static readonly __mixins: Mixin[] = [AddActionMixin, UpdateActionMixin];
}
AddActionMixin.appliesTo = schema.AddAction
AddActionMixin.Class = AddActionImpl
