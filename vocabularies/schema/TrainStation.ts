import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface TrainStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function TrainStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TrainStationClass extends CivicStructureMixin(Resource) implements TrainStation {
  }
  return TrainStationClass
}

class TrainStationImpl extends TrainStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TrainStation>) {
    super(arg, init)
    this.types.add(schema.TrainStation)
  }

  static readonly __mixins: Mixin[] = [TrainStationMixin, CivicStructureMixin];
}
TrainStationMixin.appliesTo = schema.TrainStation
TrainStationMixin.Class = TrainStationImpl
