import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AssessActionMixin } from './AssessAction';

export interface ReactAction<ID extends ResourceNode = ResourceNode> extends Schema.AssessAction<ID>, RdfResource<ID> {
}

export function ReactActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReactActionClass extends AssessActionMixin(Resource) implements ReactAction {
  }
  return ReactActionClass
}

class ReactActionImpl extends ReactActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReactAction>) {
    super(arg, init)
    this.types.add(schema.ReactAction)
  }

  static readonly __mixins: Mixin[] = [ReactActionMixin, AssessActionMixin];
}
ReactActionMixin.appliesTo = schema.ReactAction
ReactActionMixin.Class = ReactActionImpl
