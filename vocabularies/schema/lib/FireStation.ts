import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';
import { EmergencyServiceMixin } from './EmergencyService';

export interface FireStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, Schema.EmergencyService<D>, RdfResource<D> {
}

export function FireStationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FireStation> & RdfResourceCore> & Base {
  @namespace(schema)
  class FireStationClass extends EmergencyServiceMixin(CivicStructureMixin(Resource)) implements Partial<FireStation> {
  }
  return FireStationClass
}

class FireStationImpl extends FireStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FireStation>) {
    super(arg, init)
    this.types.add(schema.FireStation)
  }

  static readonly __mixins: Mixin[] = [FireStationMixin, CivicStructureMixin, EmergencyServiceMixin];
}
FireStationMixin.appliesTo = schema.FireStation
FireStationMixin.Class = FireStationImpl
