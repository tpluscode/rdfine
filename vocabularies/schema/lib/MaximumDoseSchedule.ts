import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { DoseScheduleMixin } from './DoseSchedule.js';

export interface MaximumDoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DoseSchedule<D>, rdfine.RdfResource<D> {
}

export function MaximumDoseScheduleMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MaximumDoseSchedule & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MaximumDoseScheduleClass extends DoseScheduleMixin(Resource) {
  }
  return MaximumDoseScheduleClass as any
}

class MaximumDoseScheduleImpl extends MaximumDoseScheduleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MaximumDoseSchedule>) {
    super(arg, init)
    this.types.add(schema.MaximumDoseSchedule)
  }

  static readonly __mixins: Mixin[] = [MaximumDoseScheduleMixin, DoseScheduleMixin];
}
MaximumDoseScheduleMixin.appliesTo = schema.MaximumDoseSchedule
MaximumDoseScheduleMixin.Class = MaximumDoseScheduleImpl

export const fromPointer = createFactory<MaximumDoseSchedule>([DoseScheduleMixin, MaximumDoseScheduleMixin], { types: [schema.MaximumDoseSchedule] });
