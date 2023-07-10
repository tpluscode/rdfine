import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface TrainStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

export function TrainStationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TrainStation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TrainStationClass extends CivicStructureMixin(Resource) {
  }
  return TrainStationClass as any
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

export const fromPointer = createFactory<TrainStation>([CivicStructureMixin, TrainStationMixin], { types: [schema.TrainStation] });
