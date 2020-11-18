import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Schedule<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  byDay: string | undefined;
  byDayTerm: Schema.DayOfWeek | undefined;
  byMonth: number | undefined;
  byMonthDay: number | undefined;
  byMonthWeek: number | undefined;
  duration: Schema.Duration<D> | undefined;
  endDate: Date | undefined;
  endTime: Date | undefined;
  exceptDate: Date | undefined;
  repeatCount: number | undefined;
  repeatFrequency: Schema.Duration<D> | undefined;
  repeatFrequencyLiteral: string | undefined;
  scheduleTimezone: string | undefined;
  startDate: Date | undefined;
  startTime: Date | undefined;
}

export function ScheduleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ScheduleClass extends IntangibleMixin(Resource) implements Schedule {
    @property.literal()
    byDay: string | undefined;
    @property({ path: schema.byDay })
    byDayTerm: Schema.DayOfWeek | undefined;
    @property.literal({ type: Number })
    byMonth: number | undefined;
    @property.literal({ type: Number })
    byMonthDay: number | undefined;
    @property.literal({ type: Number })
    byMonthWeek: number | undefined;
    @property.resource()
    duration: Schema.Duration | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    endDate: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    endTime: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    exceptDate: Date | undefined;
    @property.literal({ type: Number })
    repeatCount: number | undefined;
    @property.resource()
    repeatFrequency: Schema.Duration | undefined;
    @property.literal({ path: schema.repeatFrequency })
    repeatFrequencyLiteral: string | undefined;
    @property.literal()
    scheduleTimezone: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    startDate: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    startTime: Date | undefined;
  }
  return ScheduleClass
}

class ScheduleImpl extends ScheduleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Schedule>) {
    super(arg, init)
    this.types.add(schema.Schedule)
  }

  static readonly __mixins: Mixin[] = [ScheduleMixin, IntangibleMixin];
}
ScheduleMixin.appliesTo = schema.Schedule
ScheduleMixin.Class = ScheduleImpl
