import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ServiceMixin } from './Service.js';

export interface FoodService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
}

export function FoodServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FoodService> & RdfResourceCore> & Base {
  @namespace(schema)
  class FoodServiceClass extends ServiceMixin(Resource) implements Partial<FoodService> {
  }
  return FoodServiceClass
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
