import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { StructuredValueMixin } from './StructuredValue.js';

export interface InteractionCounter<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.StructuredValue<D>, rdfine.RdfResource<D> {
  endTime: Date | undefined;
  interactionService: Schema.SoftwareApplication<D> | Schema.WebSite<D> | undefined;
  interactionType: Schema.Action<D> | undefined;
  location: Schema.Place<D> | Schema.PostalAddress<D> | undefined;
  locationLiteral: string | undefined;
  startTime: Date | undefined;
  userInteractionCount: number | undefined;
}

export function InteractionCounterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<InteractionCounter & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class InteractionCounterClass extends StructuredValueMixin(Resource) {
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    endTime: Date | undefined;
    @rdfine.property.resource()
    interactionService: Schema.SoftwareApplication | Schema.WebSite | undefined;
    @rdfine.property.resource()
    interactionType: Schema.Action | undefined;
    @rdfine.property.resource()
    location: Schema.Place | Schema.PostalAddress | undefined;
    @rdfine.property.literal({ path: schema.location })
    locationLiteral: string | undefined;
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    startTime: Date | undefined;
    @rdfine.property.literal({ type: Number })
    userInteractionCount: number | undefined;
  }
  return InteractionCounterClass as any
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
