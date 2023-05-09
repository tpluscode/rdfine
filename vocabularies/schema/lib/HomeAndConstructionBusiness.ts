import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface HomeAndConstructionBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function HomeAndConstructionBusinessMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HomeAndConstructionBusiness> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HomeAndConstructionBusinessClass extends LocalBusinessMixin(Resource) implements Partial<HomeAndConstructionBusiness> {
  }
  return HomeAndConstructionBusinessClass
}

class HomeAndConstructionBusinessImpl extends HomeAndConstructionBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HomeAndConstructionBusiness>) {
    super(arg, init)
    this.types.add(schema.HomeAndConstructionBusiness)
  }

  static readonly __mixins: Mixin[] = [HomeAndConstructionBusinessMixin, LocalBusinessMixin];
}
HomeAndConstructionBusinessMixin.appliesTo = schema.HomeAndConstructionBusiness
HomeAndConstructionBusinessMixin.Class = HomeAndConstructionBusinessImpl

export const fromPointer = createFactory<HomeAndConstructionBusiness>([LocalBusinessMixin, HomeAndConstructionBusinessMixin], { types: [schema.HomeAndConstructionBusiness] });
