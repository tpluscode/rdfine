import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness';

export interface GasStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, RdfResource<D> {
}

export function GasStationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GasStation> & RdfResourceCore> & Base {
  @namespace(schema)
  class GasStationClass extends AutomotiveBusinessMixin(Resource) implements Partial<GasStation> {
  }
  return GasStationClass
}

class GasStationImpl extends GasStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GasStation>) {
    super(arg, init)
    this.types.add(schema.GasStation)
  }

  static readonly __mixins: Mixin[] = [GasStationMixin, AutomotiveBusinessMixin];
}
GasStationMixin.appliesTo = schema.GasStation
GasStationMixin.Class = GasStationImpl

export const fromPointer = createFactory<GasStation>([AutomotiveBusinessMixin, GasStationMixin], { types: [schema.GasStation] });
