import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface DryCleaningOrLaundry<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function DryCleaningOrLaundryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DryCleaningOrLaundry> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DryCleaningOrLaundryClass extends LocalBusinessMixin(Resource) implements Partial<DryCleaningOrLaundry> {
  }
  return DryCleaningOrLaundryClass
}

class DryCleaningOrLaundryImpl extends DryCleaningOrLaundryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DryCleaningOrLaundry>) {
    super(arg, init)
    this.types.add(schema.DryCleaningOrLaundry)
  }

  static readonly __mixins: Mixin[] = [DryCleaningOrLaundryMixin, LocalBusinessMixin];
}
DryCleaningOrLaundryMixin.appliesTo = schema.DryCleaningOrLaundry
DryCleaningOrLaundryMixin.Class = DryCleaningOrLaundryImpl

export const fromPointer = createFactory<DryCleaningOrLaundry>([LocalBusinessMixin, DryCleaningOrLaundryMixin], { types: [schema.DryCleaningOrLaundry] });
