import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ActionMixin } from './Action';

export interface ConsumeAction<ID extends ResourceNode = ResourceNode> extends Schema.Action<ID>, RdfResource<ID> {
  actionAccessibilityRequirement: Schema.ActionAccessSpecification<SiblingNode<ID>> | undefined;
  expectsAcceptanceOf: Schema.Offer<SiblingNode<ID>> | undefined;
}

export function ConsumeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ConsumeActionClass extends ActionMixin(Resource) implements ConsumeAction {
    @property.resource()
    actionAccessibilityRequirement: Schema.ActionAccessSpecification | undefined;
    @property.resource()
    expectsAcceptanceOf: Schema.Offer | undefined;
  }
  return ConsumeActionClass
}

class ConsumeActionImpl extends ConsumeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConsumeAction>) {
    super(arg, init)
    this.types.add(schema.ConsumeAction)
  }

  static readonly __mixins: Mixin[] = [ConsumeActionMixin, ActionMixin];
}
ConsumeActionMixin.appliesTo = schema.ConsumeAction
ConsumeActionMixin.Class = ConsumeActionImpl
