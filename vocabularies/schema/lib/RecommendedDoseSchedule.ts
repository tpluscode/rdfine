import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { DoseScheduleMixin } from './DoseSchedule';

export interface RecommendedDoseSchedule<ID extends ResourceNode = ResourceNode> extends Schema.DoseSchedule<ID>, RdfResource<ID> {
}

export function RecommendedDoseScheduleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RecommendedDoseScheduleClass extends DoseScheduleMixin(Resource) implements RecommendedDoseSchedule {
  }
  return RecommendedDoseScheduleClass
}

class RecommendedDoseScheduleImpl extends RecommendedDoseScheduleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecommendedDoseSchedule>) {
    super(arg, init)
    this.types.add(schema.RecommendedDoseSchedule)
  }

  static readonly __mixins: Mixin[] = [RecommendedDoseScheduleMixin, DoseScheduleMixin];
}
RecommendedDoseScheduleMixin.appliesTo = schema.RecommendedDoseSchedule
RecommendedDoseScheduleMixin.Class = RecommendedDoseScheduleImpl
