import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { GovernmentBuildingMixin } from './GovernmentBuilding';

export interface LegislativeBuilding<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentBuilding<D>, RdfResource<D> {
}

export function LegislativeBuildingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LegislativeBuildingClass extends GovernmentBuildingMixin(Resource) implements LegislativeBuilding {
  }
  return LegislativeBuildingClass
}

class LegislativeBuildingImpl extends LegislativeBuildingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LegislativeBuilding>) {
    super(arg, init)
    this.types.add(schema.LegislativeBuilding)
  }

  static readonly __mixins: Mixin[] = [LegislativeBuildingMixin, GovernmentBuildingMixin];
}
LegislativeBuildingMixin.appliesTo = schema.LegislativeBuilding
LegislativeBuildingMixin.Class = LegislativeBuildingImpl
