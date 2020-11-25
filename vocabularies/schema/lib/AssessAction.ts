import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface AssessAction<ID extends ResourceNode = ResourceNode> extends Schema.Action<ID>, RdfResource<ID> {
}

export function AssessActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AssessActionClass extends ActionMixin(Resource) implements AssessAction {
  }
  return AssessActionClass
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
