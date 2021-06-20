import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface AdultEntertainment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, RdfResource<D> {
}

export function AdultEntertainmentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AdultEntertainment> & RdfResourceCore> & Base {
  @namespace(schema)
  class AdultEntertainmentClass extends EntertainmentBusinessMixin(Resource) implements Partial<AdultEntertainment> {
  }
  return AdultEntertainmentClass
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
