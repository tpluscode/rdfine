import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness.js';

export interface HVACBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, rdfine.RdfResource<D> {
}

export function HVACBusinessMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<HVACBusiness & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HVACBusinessClass extends HomeAndConstructionBusinessMixin(Resource) {
  }
  return HVACBusinessClass as any
}

class HVACBusinessImpl extends HVACBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HVACBusiness>) {
    super(arg, init)
    this.types.add(schema.HVACBusiness)
  }

  static readonly __mixins: Mixin[] = [HVACBusinessMixin, HomeAndConstructionBusinessMixin];
}
HVACBusinessMixin.appliesTo = schema.HVACBusiness
HVACBusinessMixin.Class = HVACBusinessImpl

export const fromPointer = createFactory<HVACBusiness>([HomeAndConstructionBusinessMixin, HVACBusinessMixin], { types: [schema.HVACBusiness] });
