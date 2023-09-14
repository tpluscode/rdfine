import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
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
DateRangeMixin.appliesTo = rico.DateRange
DateRangeMixin.createFactory = (env: RdfineEnvironment) => createFactory<DateRange>([DateMixin, DateRangeMixin], { types: [rico.DateRange] }, env)
