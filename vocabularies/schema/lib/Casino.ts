import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface Casino<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.EntertainmentBusiness<D>, RdfResource<D> {
}

export function CasinoMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Casino> & RdfResourceCore> & Base {
  @namespace(schema)
  class CasinoClass extends EntertainmentBusinessMixin(Resource) implements Partial<Casino> {
  }
  return CasinoClass
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
