import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalConditionMixin } from './MedicalCondition.js';

export interface InfectiousDisease<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalCondition<D>, RdfResource<D> {
  infectiousAgent: string | undefined;
  infectiousAgentClass: Schema.InfectiousAgentClass | undefined;
  transmissionMethod: string | undefined;
}

export function InfectiousDiseaseMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<InfectiousDisease> & RdfResourceCore> & Base {
  @namespace(schema)
  class InfectiousDiseaseClass extends MedicalConditionMixin(Resource) implements Partial<InfectiousDisease> {
    @property.literal()
    infectiousAgent: string | undefined;
    @property()
    infectiousAgentClass: Schema.InfectiousAgentClass | undefined;
    @property.literal()
    transmissionMethod: string | undefined;
  }
  return InfectiousDiseaseClass
}

class InfectiousDiseaseImpl extends InfectiousDiseaseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<InfectiousDisease>) {
    super(arg, init)
    this.types.add(schema.InfectiousDisease)
  }

  static readonly __mixins: Mixin[] = [InfectiousDiseaseMixin, MedicalConditionMixin];
}
InfectiousDiseaseMixin.appliesTo = schema.InfectiousDisease
InfectiousDiseaseMixin.Class = InfectiousDiseaseImpl

export const fromPointer = createFactory<InfectiousDisease>([MedicalConditionMixin, InfectiousDiseaseMixin], { types: [schema.InfectiousDisease] });
