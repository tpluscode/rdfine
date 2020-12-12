import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AudienceMixin } from './Audience';
import { PeopleAudienceMixin } from './PeopleAudience';

export interface MedicalAudience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, Schema.PeopleAudience<D>, RdfResource<D> {
}

export function MedicalAudienceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalAudience> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalAudienceClass extends PeopleAudienceMixin(AudienceMixin(Resource)) implements Partial<MedicalAudience> {
  }
  return MedicalAudienceClass
}

class MedicalAudienceImpl extends MedicalAudienceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalAudience>) {
    super(arg, init)
    this.types.add(schema.MedicalAudience)
  }

  static readonly __mixins: Mixin[] = [MedicalAudienceMixin, AudienceMixin, PeopleAudienceMixin];
}
MedicalAudienceMixin.appliesTo = schema.MedicalAudience
MedicalAudienceMixin.Class = MedicalAudienceImpl
