import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface TelevisionStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function TelevisionStationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TelevisionStation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TelevisionStationClass extends LocalBusinessMixin(Resource) implements Partial<TelevisionStation> {
  }
  return TelevisionStationClass
}

class TelevisionStationImpl extends TelevisionStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TelevisionStation>) {
    super(arg, init)
    this.types.add(schema.TelevisionStation)
  }

  static readonly __mixins: Mixin[] = [TelevisionStationMixin, LocalBusinessMixin];
}
TelevisionStationMixin.appliesTo = schema.TelevisionStation
TelevisionStationMixin.Class = TelevisionStationImpl

export const fromPointer = createFactory<TelevisionStation>([LocalBusinessMixin, TelevisionStationMixin], { types: [schema.TelevisionStation] });
