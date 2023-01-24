import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { DateMixin } from './Date';

export interface DateRange<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Date<D>, RdfResource<D> {
}

export function DateRangeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DateRange> & RdfResourceCore> & Base {
  @namespace(rico)
  class DateRangeClass extends DateMixin(Resource) implements Partial<DateRange> {
  }
  return DateRangeClass
}

class DateRangeImpl extends DateRangeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DateRange>) {
    super(arg, init)
    this.types.add(rico.DateRange)
  }

  static readonly __mixins: Mixin[] = [DateRangeMixin, DateMixin];
}
DateRangeMixin.appliesTo = rico.DateRange
DateRangeMixin.Class = DateRangeImpl

export const fromPointer = createFactory<DateRange>([DateMixin, DateRangeMixin], { types: [rico.DateRange] });
