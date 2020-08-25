import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface OrganizeAction extends Schema.Action, RdfResource {
}

export function OrganizeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OrganizeActionClass extends ActionMixin(Resource) implements OrganizeAction {
  }
  return OrganizeActionClass
}

class OrganizeActionImpl extends OrganizeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OrganizeAction>) {
    super(arg, init)
    this.types.add(schema.OrganizeAction)
  }

  static readonly __mixins: Mixin[] = [OrganizeActionMixin, ActionMixin];
}
OrganizeActionMixin.appliesTo = schema.OrganizeAction
OrganizeActionMixin.Class = OrganizeActionImpl
