import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface GovernmentBuilding<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function GovernmentBuildingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GovernmentBuilding & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GovernmentBuildingClass extends CivicStructureMixin(Resource) {
  }
  return GovernmentBuildingClass as any
}

class GovernmentBuildingImpl extends GovernmentBuildingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GovernmentBuilding>) {
    super(arg, init)
    this.types.add(schema.GovernmentBuilding)
  }

  static readonly __mixins: Mixin[] = [GovernmentBuildingMixin, CivicStructureMixin];
}
GovernmentBuildingMixin.appliesTo = schema.GovernmentBuilding
GovernmentBuildingMixin.Class = GovernmentBuildingImpl

export const fromPointer = createFactory<GovernmentBuilding>([CivicStructureMixin, GovernmentBuildingMixin], { types: [schema.GovernmentBuilding] });
