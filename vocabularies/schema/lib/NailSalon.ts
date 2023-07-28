import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness.js';

export interface NailSalon<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, rdfine.RdfResource<D> {
}

export function NailSalonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<NailSalon & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class NailSalonClass extends HealthAndBeautyBusinessMixin(Resource) {
  }
  return NailSalonClass as any
}

class NailSalonImpl extends NailSalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NailSalon>) {
    super(arg, init)
    this.types.add(schema.NailSalon)
  }

  static readonly __mixins: Mixin[] = [NailSalonMixin, HealthAndBeautyBusinessMixin];
}
NailSalonMixin.appliesTo = schema.NailSalon
NailSalonMixin.Class = NailSalonImpl

export const fromPointer = createFactory<NailSalon>([HealthAndBeautyBusinessMixin, NailSalonMixin], { types: [schema.NailSalon] });
