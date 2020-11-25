import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface AchieveAction<ID extends ResourceNode = ResourceNode> extends Schema.Action<ID>, RdfResource<ID> {
}

export function AchieveActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AchieveActionClass extends ActionMixin(Resource) implements AchieveAction {
  }
  return AchieveActionClass
}

class AchieveActionImpl extends AchieveActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AchieveAction>) {
    super(arg, init)
    this.types.add(schema.AchieveAction)
  }

  static readonly __mixins: Mixin[] = [AchieveActionMixin, ActionMixin];
}
AchieveActionMixin.appliesTo = schema.AchieveAction
AchieveActionMixin.Class = AchieveActionImpl
