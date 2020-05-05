import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface HomeAndConstructionBusiness extends Schema.LocalBusiness, RdfResource {
}

export function HomeAndConstructionBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HomeAndConstructionBusinessClass extends LocalBusinessMixin(Resource) implements HomeAndConstructionBusiness {
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
