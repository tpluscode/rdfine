import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ServiceMixin } from './Service.js';

export interface FoodService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, rdfine.RdfResource<D> {
}

export function FoodServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FoodService & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FoodServiceClass extends ServiceMixin(Resource) {
  }
  return FoodServiceClass as any
}

class FoodServiceImpl extends FoodServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FoodService>) {
    super(arg, init)
    this.types.add(schema.FoodService)
  }

  static readonly __mixins: Mixin[] = [FoodServiceMixin, ServiceMixin];
}
FoodServiceMixin.appliesTo = schema.FoodService
FoodServiceMixin.Class = FoodServiceImpl

export const fromPointer = createFactory<FoodService>([ServiceMixin, FoodServiceMixin], { types: [schema.FoodService] });
