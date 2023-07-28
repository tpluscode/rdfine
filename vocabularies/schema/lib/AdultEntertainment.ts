import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness.js';

export interface AdultEntertainment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, rdfine.RdfResource<D> {
}

export function AdultEntertainmentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AdultEntertainment & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AdultEntertainmentClass extends EntertainmentBusinessMixin(Resource) {
  }
  return AdultEntertainmentClass as any
}

class AdultEntertainmentImpl extends AdultEntertainmentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AdultEntertainment>) {
    super(arg, init)
    this.types.add(schema.AdultEntertainment)
  }

  static readonly __mixins: Mixin[] = [AdultEntertainmentMixin, EntertainmentBusinessMixin];
}
AdultEntertainmentMixin.appliesTo = schema.AdultEntertainment
AdultEntertainmentMixin.Class = AdultEntertainmentImpl

export const fromPointer = createFactory<AdultEntertainment>([EntertainmentBusinessMixin, AdultEntertainmentMixin], { types: [schema.AdultEntertainment] });
