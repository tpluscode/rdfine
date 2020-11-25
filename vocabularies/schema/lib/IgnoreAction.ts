import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AssessActionMixin } from './AssessAction';

export interface IgnoreAction<ID extends ResourceNode = ResourceNode> extends Schema.AssessAction<ID>, RdfResource<ID> {
}

export function IgnoreActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class IgnoreActionClass extends AssessActionMixin(Resource) implements IgnoreAction {
  }
  return IgnoreActionClass
}

class IgnoreActionImpl extends IgnoreActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IgnoreAction>) {
    super(arg, init)
    this.types.add(schema.IgnoreAction)
  }

  static readonly __mixins: Mixin[] = [IgnoreActionMixin, AssessActionMixin];
}
IgnoreActionMixin.appliesTo = schema.IgnoreAction
IgnoreActionMixin.Class = IgnoreActionImpl
