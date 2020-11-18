import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ConsumeActionMixin } from './ConsumeAction';

export interface UseAction<ID extends ResourceNode = ResourceNode> extends Schema.ConsumeAction<ID>, RdfResource<ID> {
}

export function UseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UseActionClass extends ConsumeActionMixin(Resource) implements UseAction {
  }
  return UseActionClass
}

class UseActionImpl extends UseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UseAction>) {
    super(arg, init)
    this.types.add(schema.UseAction)
  }

  static readonly __mixins: Mixin[] = [UseActionMixin, ConsumeActionMixin];
}
UseActionMixin.appliesTo = schema.UseAction
UseActionMixin.Class = UseActionImpl
