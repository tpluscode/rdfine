import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface ProfessionalService extends Schema.LocalBusiness, RdfResource {
}

export default function ProfessionalServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProfessionalServiceClass extends LocalBusinessMixin(Resource) implements ProfessionalService {
  }
  return ProfessionalServiceClass
}

class ProfessionalServiceImpl extends ProfessionalServiceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ProfessionalService)
  }
}
ProfessionalServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProfessionalService)
ProfessionalServiceMixin.Class = ProfessionalServiceImpl