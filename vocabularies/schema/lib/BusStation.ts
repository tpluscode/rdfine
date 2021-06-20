import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CivicStructureMixin } from './CivicStructure';

export interface BusStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, RdfResource<D> {
}

export function BusStationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BusStation> & RdfResourceCore> & Base {
  @namespace(schema)
  class BusStationClass extends CivicStructureMixin(Resource) implements Partial<BusStation> {
  }
  return BusStationClass
}

class BusStationImpl extends BusStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusStation>) {
    super(arg, init)
    this.types.add(schema.BusStation)
  }

  static readonly __mixins: Mixin[] = [BusStationMixin, CivicStructureMixin];
}
BusStationMixin.appliesTo = schema.BusStation
BusStationMixin.Class = BusStationImpl

export const fromPointer = createFactory<BusStation>([CivicStructureMixin, BusStationMixin], { types: [schema.BusStation] });
