import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness.js';

export interface Electrician<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.HomeAndConstructionBusiness<D>, rdfine.RdfResource<D> {
}

export function ElectricianMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Electrician & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ElectricianClass extends HomeAndConstructionBusinessMixin(Resource) {
  }
  return ElectricianClass as any
}

class ElectricianImpl extends ElectricianMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Electrician>) {
    super(arg, init)
    this.types.add(schema.Electrician)
  }

  static readonly __mixins: Mixin[] = [ElectricianMixin, HomeAndConstructionBusinessMixin];
}
ElectricianMixin.appliesTo = schema.Electrician
ElectricianMixin.Class = ElectricianImpl

export const fromPointer = createFactory<Electrician>([HomeAndConstructionBusinessMixin, ElectricianMixin], { types: [schema.Electrician] });
