import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface InteractionCounter<ID extends ResourceNode = ResourceNode> extends Schema.StructuredValue<ID>, RdfResource<ID> {
  interactionService: Schema.SoftwareApplication<SiblingNode<ID>> | Schema.WebSite<SiblingNode<ID>> | undefined;
  interactionType: Schema.Action<SiblingNode<ID>> | undefined;
  userInteractionCount: number | undefined;
}

export function InteractionCounterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class InteractionCounterClass extends StructuredValueMixin(Resource) implements InteractionCounter {
    @property.resource()
    interactionService: Schema.SoftwareApplication | Schema.WebSite | undefined;
    @property.resource()
    interactionType: Schema.Action | undefined;
    @property.literal({ type: Number })
    userInteractionCount: number | undefined;
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
