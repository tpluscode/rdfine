import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ServiceMixin } from './Service.js';

export interface CableOrSatelliteService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
}

export function CableOrSatelliteServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CableOrSatelliteService> & RdfResourceCore> & Base {
  @namespace(schema)
  class CableOrSatelliteServiceClass extends ServiceMixin(Resource) implements Partial<CableOrSatelliteService> {
  }
  return CableOrSatelliteServiceClass
}

class CableOrSatelliteServiceImpl extends CableOrSatelliteServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CableOrSatelliteService>) {
    super(arg, init)
    this.types.add(schema.CableOrSatelliteService)
  }

  static readonly __mixins: Mixin[] = [CableOrSatelliteServiceMixin, ServiceMixin];
}
CableOrSatelliteServiceMixin.appliesTo = schema.CableOrSatelliteService
CableOrSatelliteServiceMixin.Class = CableOrSatelliteServiceImpl

export const fromPointer = createFactory<CableOrSatelliteService>([ServiceMixin, CableOrSatelliteServiceMixin], { types: [schema.CableOrSatelliteService] });
