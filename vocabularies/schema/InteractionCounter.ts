import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StructuredValueMixin from './StructuredValue';

export interface InteractionCounter extends Schema.StructuredValue, RdfResource {
  interactionService: Schema.SoftwareApplication | Schema.WebSite;
  interactionType: Schema.Action;
  userInteractionCount: number;
}

export default function InteractionCounterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InteractionCounterClass extends StructuredValueMixin(Resource) implements InteractionCounter {
    @property.resource()
    interactionService!: Schema.SoftwareApplication | Schema.WebSite;
    @property.resource()
    interactionType!: Schema.Action;
    @property.literal({ type: Number })
    userInteractionCount!: number;
  }
  return InteractionCounterClass
}

class InteractionCounterImpl extends InteractionCounterMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.InteractionCounter)
  }
}
InteractionCounterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.InteractionCounter)
InteractionCounterMixin.Class = InteractionCounterImpl
