import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ServiceMixin } from './Service';

export interface CableOrSatelliteService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
}

export function CableOrSatelliteServiceMixin<Base extends Constructor>(Resource: Base): Constructor<CableOrSatelliteService> & Base {
  @namespace(schema)
  class CableOrSatelliteServiceClass extends ServiceMixin(Resource) implements CableOrSatelliteService {
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
