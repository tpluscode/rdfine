import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { DateMixin } from './Date';

export interface DateSet<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Date<D>, RdfResource<D> {
}

export function DateSetMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DateSet> & RdfResourceCore> & Base {
  @namespace(rico)
  class DateSetClass extends DateMixin(Resource) implements Partial<DateSet> {
  }
  return DateSetClass
}

class DateSetImpl extends DateSetMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DateSet>) {
    super(arg, init)
    this.types.add(rico.DateSet)
  }

  static readonly __mixins: Mixin[] = [DateSetMixin, DateMixin];
}
DateSetMixin.appliesTo = rico.DateSet
DateSetMixin.Class = DateSetImpl

export const fromPointer = createFactory<DateSet>([DateMixin, DateSetMixin], { types: [rico.DateSet] });
