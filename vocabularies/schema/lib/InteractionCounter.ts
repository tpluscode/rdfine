import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StructuredValueMixin } from './StructuredValue';

export interface InteractionCounter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, RdfResource<D> {
  interactionService: Schema.SoftwareApplication<D> | Schema.WebSite<D> | undefined;
  interactionType: Schema.Action<D> | undefined;
  userInteractionCount: number | undefined;
}

export function InteractionCounterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InteractionCounter> & RdfResourceCore> & Base {
  @namespace(schema)
  class InteractionCounterClass extends StructuredValueMixin(Resource) implements Partial<InteractionCounter> {
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

export const fromPointer = createFactory<InteractionCounter>([StructuredValueMixin, InteractionCounterMixin], { types: [schema.InteractionCounter] });
