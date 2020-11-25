import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface FindAction<ID extends ResourceNode = ResourceNode> extends Schema.Action<ID>, RdfResource<ID> {
}

export function FindActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FindActionClass extends ActionMixin(Resource) implements FindAction {
  }
  return FindActionClass
}

class FindActionImpl extends FindActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FindAction>) {
    super(arg, init)
    this.types.add(schema.FindAction)
  }

  static readonly __mixins: Mixin[] = [FindActionMixin, ActionMixin];
}
FindActionMixin.appliesTo = schema.FindAction
FindActionMixin.Class = FindActionImpl
