import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { GovernmentBuildingMixin } from './GovernmentBuilding';

export interface CityHall<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentBuilding<D>, RdfResource<D> {
}

export function CityHallMixin<Base extends Constructor>(Resource: Base): Constructor<CityHall> & Base {
  @namespace(schema)
  class CityHallClass extends GovernmentBuildingMixin(Resource) implements Partial<CityHall> {
  }
  return CityHallClass
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
