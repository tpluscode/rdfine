import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ServiceMixin } from './Service';

export interface FoodService<ID extends ResourceNode = ResourceNode> extends Schema.Service<ID>, RdfResource<ID> {
}

export function FoodServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodServiceClass extends ServiceMixin(Resource) implements FoodService {
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
