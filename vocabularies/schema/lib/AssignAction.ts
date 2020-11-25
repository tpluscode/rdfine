import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AllocateActionMixin } from './AllocateAction';

export interface AssignAction<ID extends ResourceNode = ResourceNode> extends Schema.AllocateAction<ID>, RdfResource<ID> {
}

export function AssignActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AssignActionClass extends AllocateActionMixin(Resource) implements AssignAction {
  }
  return AssignActionClass
}

class AssignActionImpl extends AssignActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AssignAction>) {
    super(arg, init)
    this.types.add(schema.AssignAction)
  }

  static readonly __mixins: Mixin[] = [AssignActionMixin, AllocateActionMixin];
}
AssignActionMixin.appliesTo = schema.AssignAction
AssignActionMixin.Class = AssignActionImpl
