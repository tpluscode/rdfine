import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface ConsumeAction extends Schema.Action, RdfResource {
  actionAccessibilityRequirement: Schema.ActionAccessSpecification;
  expectsAcceptanceOf: Schema.Offer;
}

export function ConsumeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ConsumeActionClass extends ActionMixin(Resource) implements ConsumeAction {
    @property.resource()
    actionAccessibilityRequirement!: Schema.ActionAccessSpecification;
    @property.resource()
    expectsAcceptanceOf!: Schema.Offer;
  }
  return ConsumeActionClass
}

class ConsumeActionImpl extends ConsumeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConsumeAction>) {
    super(arg, init)
    this.types.add(schema.ConsumeAction)
  }
}
ConsumeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ConsumeAction)
ConsumeActionMixin.Class = ConsumeActionImpl
