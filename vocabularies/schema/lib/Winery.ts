import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, ResourceIdentifier, DatasetType } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { FoodEstablishmentMixin } from './FoodEstablishment';

export interface Winery<ID extends ResourceNode = ResourceNode> extends Schema.FoodEstablishment<ID>, RdfResource<ID> {
}

export function WineryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WineryClass extends FoodEstablishmentMixin(Resource) implements Winery {
  }
  return WineryClass
}

class WineryImpl extends WineryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Winery>) {
    super(arg, init)
    this.types.add(schema.Winery)
  }

  static readonly __mixins: Mixin[] = [WineryMixin, FoodEstablishmentMixin];
}
WineryMixin.appliesTo = schema.Winery
WineryMixin.Class = WineryImpl
