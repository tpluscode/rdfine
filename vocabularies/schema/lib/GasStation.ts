import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AutomotiveBusinessMixin } from './AutomotiveBusiness.js';

export interface GasStation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AutomotiveBusiness<D>, rdfine.RdfResource<D> {
}

export function GasStationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GasStation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GasStationClass extends AutomotiveBusinessMixin(Resource) {
  }
  return GasStationClass as any
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
