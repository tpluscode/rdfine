import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AudienceMixin from './Audience';

export interface EducationalAudience extends Schema.Audience, RdfResource {
  educationalRole: string;
}

export default function EducationalAudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EducationalAudienceClass extends AudienceMixin(Resource) implements EducationalAudience {
    @property.literal()
    educationalRole!: string;
  }
  return EducationalAudienceClass
}

class EducationalAudienceImpl extends EducationalAudienceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<EducationalAudience>) {
    super(arg)
    this.types.add(schema.EducationalAudience)
    initializeProperties(this, init)
  }
}
EducationalAudienceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EducationalAudience)
EducationalAudienceMixin.Class = EducationalAudienceImpl
