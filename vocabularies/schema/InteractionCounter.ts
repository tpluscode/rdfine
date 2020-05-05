import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StructuredValueMixin } from './StructuredValue';

export interface InteractionCounter extends Schema.StructuredValue, RdfResource {
  interactionService: Schema.SoftwareApplication | Schema.WebSite;
  interactionType: Schema.Action;
  userInteractionCount: number;
}

export function InteractionCounterMixin<Base extends Constructor>(Resource: Base) {
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
  constructor(arg: ResourceNode, init?: Initializer<InteractionCounter>) {
    super(arg, init)
    this.types.add(schema.InteractionCounter)
  }

  static readonly __mixins: Mixin[] = [InteractionCounterMixin, StructuredValueMixin];
}
InteractionCounterMixin.appliesTo = schema.InteractionCounter
InteractionCounterMixin.Class = InteractionCounterImpl
