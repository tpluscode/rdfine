import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { DateMixin } from './Date.js';

export interface SingleDate<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Date<D>, rdfine.RdfResource<D> {
}

export function SingleDateMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SingleDate> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class SingleDateClass extends DateMixin(Resource) implements Partial<SingleDate> {
  }
  return SingleDateClass
}

class SingleDateImpl extends SingleDateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SingleDate>) {
    super(arg, init)
    this.types.add(rico.SingleDate)
  }

  static readonly __mixins: Mixin[] = [SingleDateMixin, DateMixin];
}
SingleDateMixin.appliesTo = rico.SingleDate
SingleDateMixin.Class = SingleDateImpl

export const fromPointer = createFactory<SingleDate>([DateMixin, SingleDateMixin], { types: [rico.SingleDate] });
