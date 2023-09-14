import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { DateMixin } from './Date.js';

export interface DateSet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Date<D>, rdfine.RdfResource<D> {
}

export function DateSetMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DateSet & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class DateSetClass extends DateMixin(Resource) {
  }
  return DateSetClass as any
}
DateSetMixin.appliesTo = rico.DateSet
DateSetMixin.createFactory = (env: RdfineEnvironment) => createFactory<DateSet>([DateMixin, DateSetMixin], { types: [rico.DateSet] }, env)
