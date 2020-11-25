import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizeActionMixin } from './OrganizeAction';

export interface AllocateAction<ID extends ResourceNode = ResourceNode> extends Schema.OrganizeAction<ID>, RdfResource<ID> {
}

export function AllocateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AllocateActionClass extends OrganizeActionMixin(Resource) implements AllocateAction {
  }
  return AllocateActionClass
}

class AllocateActionImpl extends AllocateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AllocateAction>) {
    super(arg, init)
    this.types.add(schema.AllocateAction)
  }

  static readonly __mixins: Mixin[] = [AllocateActionMixin, OrganizeActionMixin];
}
AllocateActionMixin.appliesTo = schema.AllocateAction
AllocateActionMixin.Class = AllocateActionImpl
