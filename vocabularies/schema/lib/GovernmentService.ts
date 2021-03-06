import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ServiceMixin } from './Service';

export interface GovernmentService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, RdfResource<D> {
  jurisdiction: Schema.AdministrativeArea<D> | undefined;
  jurisdictionLiteral: string | undefined;
  serviceOperator: Schema.Organization<D> | undefined;
}

export function GovernmentServiceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GovernmentService> & RdfResourceCore> & Base {
  @namespace(schema)
  class GovernmentServiceClass extends ServiceMixin(Resource) implements Partial<GovernmentService> {
    @property.resource()
    jurisdiction: Schema.AdministrativeArea | undefined;
    @property.literal({ path: schema.jurisdiction })
    jurisdictionLiteral: string | undefined;
    @property.resource()
    serviceOperator: Schema.Organization | undefined;
  }
  return GovernmentServiceClass
}

class GovernmentServiceImpl extends GovernmentServiceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GovernmentService>) {
    super(arg, init)
    this.types.add(schema.GovernmentService)
  }

  static readonly __mixins: Mixin[] = [GovernmentServiceMixin, ServiceMixin];
}
GovernmentServiceMixin.appliesTo = schema.GovernmentService
GovernmentServiceMixin.Class = GovernmentServiceImpl

export const fromPointer = createFactory<GovernmentService>([ServiceMixin, GovernmentServiceMixin], { types: [schema.GovernmentService] });
