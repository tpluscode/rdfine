import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface EducationEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
  assesses: string | undefined;
  educationalLevel: string | undefined;
  educationalLevelTerm: RDF.NamedNode | undefined;
  teaches: string | undefined;
}

export function EducationEventMixin<Base extends Constructor>(Resource: Base): Constructor<EducationEvent> & Base {
  @namespace(schema)
  class EducationEventClass extends EventMixin(Resource) implements Partial<EducationEvent> {
    @property.literal()
    assesses: string | undefined;
    @property.literal()
    educationalLevel: string | undefined;
    @property({ path: schema.educationalLevel })
    educationalLevelTerm: RDF.NamedNode | undefined;
    @property.literal()
    teaches: string | undefined;
  }
  return EducationEventClass
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
