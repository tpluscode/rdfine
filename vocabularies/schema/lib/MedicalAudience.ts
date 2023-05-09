import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AudienceMixin } from './Audience.js';
import { PeopleAudienceMixin } from './PeopleAudience.js';

export interface MedicalAudience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, Schema.PeopleAudience<D>, rdfine.RdfResource<D> {
}

export function MedicalAudienceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MedicalAudience> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
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

export const fromPointer = createFactory<MedicalAudience>([PeopleAudienceMixin, AudienceMixin, MedicalAudienceMixin], { types: [schema.MedicalAudience] });
