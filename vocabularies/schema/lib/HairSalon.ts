import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HealthAndBeautyBusinessMixin } from './HealthAndBeautyBusiness.js';

export interface HairSalon<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HealthAndBeautyBusiness<D>, rdfine.RdfResource<D> {
}

export function HairSalonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<HairSalon & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HairSalonClass extends HealthAndBeautyBusinessMixin(Resource) {
  }
  return HairSalonClass as any
}

class HairSalonImpl extends HairSalonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HairSalon>) {
    super(arg, init)
    this.types.add(schema.HairSalon)
  }

  static readonly __mixins: Mixin[] = [HairSalonMixin, HealthAndBeautyBusinessMixin];
}
HairSalonMixin.appliesTo = schema.HairSalon
HairSalonMixin.Class = HairSalonImpl

export const fromPointer = createFactory<HairSalon>([HealthAndBeautyBusinessMixin, HairSalonMixin], { types: [schema.HairSalon] });
