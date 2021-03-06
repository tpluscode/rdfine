import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { EmergencyServiceMixin } from './EmergencyService';

export interface PoliceStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.EmergencyService<D>, RdfResource<D> {
}

export function PoliceStationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PoliceStation> & RdfResourceCore> & Base {
  @namespace(schema)
  class PoliceStationClass extends EmergencyServiceMixin(CivicStructureMixin(Resource)) implements Partial<PoliceStation> {
  }
  return PoliceStationClass
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
