import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { GovernmentBuildingMixin } from './GovernmentBuilding.js';

export interface CityHall<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentBuilding<D>, rdfine.RdfResource<D> {
}

export function CityHallMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CityHall & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CityHallClass extends GovernmentBuildingMixin(Resource) {
  }
  return CityHallClass as any
}

class CityHallImpl extends CityHallMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CityHall>) {
    super(arg, init)
    this.types.add(schema.CityHall)
  }

  static readonly __mixins: Mixin[] = [CityHallMixin, GovernmentBuildingMixin];
}
CityHallMixin.appliesTo = schema.CityHall
CityHallMixin.Class = CityHallImpl

export const fromPointer = createFactory<CityHall>([GovernmentBuildingMixin, CityHallMixin], { types: [schema.CityHall] });
