import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UpdateActionMixin } from './UpdateAction';

export interface ReplaceAction<ID extends ResourceNode = ResourceNode> extends Schema.UpdateAction<ID>, RdfResource<ID> {
  replacee: Schema.Thing<SiblingNode<ID>> | undefined;
  replacer: Schema.Thing<SiblingNode<ID>> | undefined;
}

export function ReplaceActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReplaceActionClass extends UpdateActionMixin(Resource) implements ReplaceAction {
    @property.resource()
    replacee: Schema.Thing | undefined;
    @property.resource()
    replacer: Schema.Thing | undefined;
  }
  return ReplaceActionClass
}

class ReplaceActionImpl extends ReplaceActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReplaceAction>) {
    super(arg, init)
    this.types.add(schema.ReplaceAction)
  }

  static readonly __mixins: Mixin[] = [ReplaceActionMixin, UpdateActionMixin];
}
ReplaceActionMixin.appliesTo = schema.ReplaceAction
ReplaceActionMixin.Class = ReplaceActionImpl
