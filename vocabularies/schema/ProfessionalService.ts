import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ProfessionalService>) {
    super(arg, init)
    this.types.add(schema.ProfessionalService)
  }
}
ProfessionalServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProfessionalService)
ProfessionalServiceMixin.Class = ProfessionalServiceImpl
