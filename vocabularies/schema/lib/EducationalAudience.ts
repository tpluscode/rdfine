import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AudienceMixin } from './Audience.js';

export interface EducationalAudience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, rdfine.RdfResource<D> {
  educationalRole: string | undefined;
}

export function EducationalAudienceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<EducationalAudience> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EducationalAudienceClass extends AudienceMixin(Resource) implements Partial<EducationalAudience> {
    @rdfine.property.literal()
    educationalRole: string | undefined;
  }
  return EducationalAudienceClass
}

class EducationalAudienceImpl extends EducationalAudienceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EducationalAudience>) {
    super(arg, init)
    this.types.add(schema.EducationalAudience)
  }

  static readonly __mixins: Mixin[] = [EducationalAudienceMixin, AudienceMixin];
}
EducationalAudienceMixin.appliesTo = schema.EducationalAudience
EducationalAudienceMixin.Class = EducationalAudienceImpl

export const fromPointer = createFactory<EducationalAudience>([AudienceMixin, EducationalAudienceMixin], { types: [schema.EducationalAudience] });
