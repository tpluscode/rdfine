import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { GovernmentBuildingMixin } from './GovernmentBuilding.js';

export interface LegislativeBuilding<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentBuilding<D>, RdfResource<D> {
}

export function LegislativeBuildingMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LegislativeBuilding> & RdfResourceCore> & Base {
  @namespace(schema)
  class LegislativeBuildingClass extends GovernmentBuildingMixin(Resource) implements Partial<LegislativeBuilding> {
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

export const fromPointer = createFactory<LegislativeBuilding>([GovernmentBuildingMixin, LegislativeBuildingMixin], { types: [schema.LegislativeBuilding] });
