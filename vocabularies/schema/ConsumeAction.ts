import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ActionMixin from './Action';

export interface ConsumeAction extends Schema.Action, RdfResource {
  actionAccessibilityRequirement: Schema.ActionAccessSpecification;
  expectsAcceptanceOf: Schema.Offer;
}

export default function ConsumeActionMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ConsumeAction>) {
    super(arg)
    this.types.add(schema.ConsumeAction)
    initializeProperties(this, init)
  }
}
ConsumeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ConsumeAction)
ConsumeActionMixin.Class = ConsumeActionImpl
