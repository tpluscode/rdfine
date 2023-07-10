import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness.js';

export interface Casino<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, rdfine.RdfResource<D> {
}

export function CasinoMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Casino & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CasinoClass extends EntertainmentBusinessMixin(Resource) {
  }
  return CasinoClass as any
}

class CasinoImpl extends CasinoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Casino>) {
    super(arg, init)
    this.types.add(schema.Casino)
  }

  static readonly __mixins: Mixin[] = [CasinoMixin, EntertainmentBusinessMixin];
}
CasinoMixin.appliesTo = schema.Casino
CasinoMixin.Class = CasinoImpl

export const fromPointer = createFactory<Casino>([EntertainmentBusinessMixin, CasinoMixin], { types: [schema.Casino] });
