import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';
import { EmergencyServiceMixin } from './EmergencyService.js';

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

export const fromPointer = createFactory<FireStation>([EmergencyServiceMixin, CivicStructureMixin, FireStationMixin], { types: [schema.FireStation] });
