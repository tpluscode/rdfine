import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface EducationEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
  assesses: string | undefined;
  educationalLevel: string | undefined;
  educationalLevelTerm: RDF.NamedNode | undefined;
  teaches: string | undefined;
}

export function EducationEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<EducationEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EducationEventClass extends EventMixin(Resource) {
    @rdfine.property.literal()
    assesses: string | undefined;
    @rdfine.property.literal()
    educationalLevel: string | undefined;
    @rdfine.property({ path: schema.educationalLevel })
    educationalLevelTerm: RDF.NamedNode | undefined;
    @rdfine.property.literal()
    teaches: string | undefined;
  }
  return EducationEventClass as any
}

class EducationEventImpl extends EducationEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EducationEvent>) {
    super(arg, init)
    this.types.add(schema.EducationEvent)
  }

  static readonly __mixins: Mixin[] = [EducationEventMixin, EventMixin];
}
EducationEventMixin.appliesTo = schema.EducationEvent
EducationEventMixin.Class = EducationEventImpl

export const fromPointer = createFactory<EducationEvent>([EventMixin, EducationEventMixin], { types: [schema.EducationEvent] });
