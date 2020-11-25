import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ServiceMixin } from './Service';

export interface GovernmentService<ID extends ResourceNode = ResourceNode> extends Schema.Service<ID>, RdfResource<ID> {
  jurisdiction: Schema.AdministrativeArea<SiblingNode<ID>> | undefined;
  jurisdictionLiteral: string | undefined;
  serviceOperator: Schema.Organization<SiblingNode<ID>> | undefined;
}

export function GovernmentServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentServiceClass extends ServiceMixin(Resource) implements GovernmentService {
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
