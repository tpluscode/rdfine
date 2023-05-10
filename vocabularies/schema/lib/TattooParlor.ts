import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness.js';

export interface TattooParlor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, rdfine.RdfResource<D> {
}

export function TattooParlorMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<TattooParlor> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TattooParlorClass extends HealthAndBeautyBusinessMixin(Resource) implements Partial<TattooParlor> {
  }
  return TattooParlorClass
}

class TattooParlorImpl extends TattooParlorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TattooParlor>) {
    super(arg, init)
    this.types.add(schema.TattooParlor)
  }

  static readonly __mixins: Mixin[] = [TattooParlorMixin, HealthAndBeautyBusinessMixin];
}
TattooParlorMixin.appliesTo = schema.TattooParlor
TattooParlorMixin.Class = TattooParlorImpl

export const fromPointer = createFactory<TattooParlor>([HealthAndBeautyBusinessMixin, TattooParlorMixin], { types: [schema.TattooParlor] });
