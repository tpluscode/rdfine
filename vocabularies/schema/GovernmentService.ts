import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ServiceMixin from './Service';

export interface GovernmentService extends Schema.Service, RdfResource {
  serviceOperator: Schema.Organization;
}

export default function GovernmentServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentServiceClass extends ServiceMixin(Resource) implements GovernmentService {
    @property.resource()
    serviceOperator!: Schema.Organization;
  }
  return GovernmentServiceClass
}

class GovernmentServiceImpl extends GovernmentServiceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GovernmentService)
  }
}
GovernmentServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GovernmentService)
GovernmentServiceMixin.Class = GovernmentServiceImpl
