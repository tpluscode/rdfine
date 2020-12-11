import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DoseScheduleMixin } from './DoseSchedule';

export interface MaximumDoseSchedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.DoseSchedule<D>, RdfResource<D> {
}

export function MaximumDoseScheduleMixin<Base extends Constructor>(Resource: Base): Constructor<MaximumDoseSchedule> & Base {
  @namespace(schema)
  class MaximumDoseScheduleClass extends DoseScheduleMixin(Resource) implements Partial<MaximumDoseSchedule> {
  }
  return MaximumDoseScheduleClass
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
