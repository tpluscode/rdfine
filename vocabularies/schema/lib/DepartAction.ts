import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MoveActionMixin } from './MoveAction';

export interface DepartAction<ID extends ResourceNode = ResourceNode> extends Schema.MoveAction<ID>, RdfResource<ID> {
}

export function DepartActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DepartActionClass extends MoveActionMixin(Resource) implements DepartAction {
  }
  return DepartActionClass
}

class DepartActionImpl extends DepartActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DepartAction>) {
    super(arg, init)
    this.types.add(schema.DepartAction)
  }

  static readonly __mixins: Mixin[] = [DepartActionMixin, MoveActionMixin];
}
DepartActionMixin.appliesTo = schema.DepartAction
DepartActionMixin.Class = DepartActionImpl
