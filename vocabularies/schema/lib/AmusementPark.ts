import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness.js';

export interface AmusementPark<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, RdfResource<D> {
}

export function AmusementParkMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AmusementPark> & RdfResourceCore> & Base {
  @namespace(schema)
  class AmusementParkClass extends EntertainmentBusinessMixin(Resource) implements Partial<AmusementPark> {
  }
  return AmusementParkClass
}

class AmusementParkImpl extends AmusementParkMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AmusementPark>) {
    super(arg, init)
    this.types.add(schema.AmusementPark)
  }

  static readonly __mixins: Mixin[] = [AmusementParkMixin, EntertainmentBusinessMixin];
}
AmusementParkMixin.appliesTo = schema.AmusementPark
AmusementParkMixin.Class = AmusementParkImpl

export const fromPointer = createFactory<AmusementPark>([EntertainmentBusinessMixin, AmusementParkMixin], { types: [schema.AmusementPark] });
