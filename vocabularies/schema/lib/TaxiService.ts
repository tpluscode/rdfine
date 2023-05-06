import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ServiceMixin } from './Service.js';

export interface TaxiService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
}

export function TaxiServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TaxiService> & RdfResourceCore> & Base {
  @namespace(schema)
  class TaxiServiceClass extends ServiceMixin(Resource) implements Partial<TaxiService> {
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

export const fromPointer = createFactory<TaxiService>([ServiceMixin, TaxiServiceMixin], { types: [schema.TaxiService] });
