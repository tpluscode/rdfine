import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { DateMixin } from './Date.js';

export interface SingleDate<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Date<D>, rdfine.RdfResource<D> {
}

export function SingleDateMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SingleDate & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class SingleDateClass extends DateMixin(Resource) {
  }
  return SingleDateClass as any
}
SingleDateMixin.appliesTo = rico.SingleDate

export const factory = (env: RdfineEnvironment) => createFactory<SingleDate>([DateMixin, SingleDateMixin], { types: [rico.SingleDate] }, env);
