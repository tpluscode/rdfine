import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ServiceMixin } from './Service.js';

export interface GovernmentService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, rdfine.RdfResource<D> {
  jurisdiction: Schema.AdministrativeArea<D> | undefined;
  jurisdictionLiteral: string | undefined;
  serviceOperator: Schema.Organization<D> | undefined;
}

export function GovernmentServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GovernmentService & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GovernmentServiceClass extends ServiceMixin(Resource) {
    @rdfine.property.resource()
    jurisdiction: Schema.AdministrativeArea | undefined;
    @rdfine.property.literal({ path: schema.jurisdiction })
    jurisdictionLiteral: string | undefined;
    @rdfine.property.resource()
    serviceOperator: Schema.Organization | undefined;
  }
  return GovernmentServiceClass as any
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
