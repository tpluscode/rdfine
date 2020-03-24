import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Audience extends Schema.Intangible, RdfResource {
  audienceType: string;
  geographicArea: Schema.AdministrativeArea;
}

export default function AudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AudienceClass extends IntangibleMixin(Resource) implements Audience {
    @property.literal()
    audienceType!: string;
    @property.resource()
    geographicArea!: Schema.AdministrativeArea;
  }
  return AudienceClass
}

class AudienceImpl extends AudienceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Audience)
  }
}
AudienceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Audience)
AudienceMixin.Class = AudienceImpl
