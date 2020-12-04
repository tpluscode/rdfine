import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface HomeAndConstructionBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
}

export function HomeAndConstructionBusinessMixin<Base extends Constructor>(Resource: Base): Constructor<HomeAndConstructionBusiness> & Base {
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
