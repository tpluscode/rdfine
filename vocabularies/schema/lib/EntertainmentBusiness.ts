import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface EntertainmentBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function EntertainmentBusinessMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EntertainmentBusiness> & RdfResourceCore> & Base {
  @namespace(schema)
  class EntertainmentBusinessClass extends LocalBusinessMixin(Resource) implements Partial<EntertainmentBusiness> {
  }
  return EntertainmentBusinessClass
}

class EntertainmentBusinessImpl extends EntertainmentBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EntertainmentBusiness>) {
    super(arg, init)
    this.types.add(schema.EntertainmentBusiness)
  }

  static readonly __mixins: Mixin[] = [EntertainmentBusinessMixin, LocalBusinessMixin];
}
EntertainmentBusinessMixin.appliesTo = schema.EntertainmentBusiness
EntertainmentBusinessMixin.Class = EntertainmentBusinessImpl

export const fromPointer = createFactory<EntertainmentBusiness>([LocalBusinessMixin, EntertainmentBusinessMixin], { types: [schema.EntertainmentBusiness] });
