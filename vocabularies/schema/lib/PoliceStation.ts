import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';
import { EmergencyServiceMixin } from './EmergencyService.js';

export interface PoliceStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.EmergencyService<D>, rdfine.RdfResource<D> {
}

export function PoliceStationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<PoliceStation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PoliceStationClass extends EmergencyServiceMixin(CivicStructureMixin(Resource)) {
  }
  return PoliceStationClass as any
}

class PoliceStationImpl extends PoliceStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PoliceStation>) {
    super(arg, init)
    this.types.add(schema.PoliceStation)
  }

  static readonly __mixins: Mixin[] = [PoliceStationMixin, CivicStructureMixin, EmergencyServiceMixin];
}
PoliceStationMixin.appliesTo = schema.PoliceStation
PoliceStationMixin.Class = PoliceStationImpl

export const fromPointer = createFactory<PoliceStation>([EmergencyServiceMixin, CivicStructureMixin, PoliceStationMixin], { types: [schema.PoliceStation] });
