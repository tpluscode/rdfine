import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Audience>) {
    super(arg)
    this.types.add(schema.Audience)
    initializeProperties<Audience>(this, init)
  }
}
AudienceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Audience)
AudienceMixin.Class = AudienceImpl
