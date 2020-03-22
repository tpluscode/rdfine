import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EducationalAudience)
  }
}
EducationalAudienceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EducationalAudience)
EducationalAudienceMixin.Class = EducationalAudienceImpl