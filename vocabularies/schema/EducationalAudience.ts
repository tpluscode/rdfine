import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AudienceMixin } from './Audience';

export interface EducationalAudience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, RdfResource<D> {
  educationalRole: string | undefined;
}

export function EducationalAudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EducationalAudienceClass extends AudienceMixin(Resource) implements EducationalAudience {
    @property.literal()
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
