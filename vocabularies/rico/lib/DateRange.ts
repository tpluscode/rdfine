import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { DateMixin } from './Date.js';

export interface DateRange<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Date<D>, rdfine.RdfResource<D> {
}

export function DateRangeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DateRange & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class DateRangeClass extends DateMixin(Resource) {
  }
  return DateRangeClass as any
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
