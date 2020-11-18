import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ServiceMixin } from './Service';

export interface TaxiService<ID extends ResourceNode = ResourceNode> extends Schema.Service<ID>, RdfResource<ID> {
}

export function TaxiServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TaxiServiceClass extends ServiceMixin(Resource) implements TaxiService {
  }
  return TaxiServiceClass
}

class TaxiServiceImpl extends TaxiServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TaxiService>) {
    super(arg, init)
    this.types.add(schema.TaxiService)
  }

  static readonly __mixins: Mixin[] = [TaxiServiceMixin, ServiceMixin];
}
TaxiServiceMixin.appliesTo = schema.TaxiService
TaxiServiceMixin.Class = TaxiServiceImpl
