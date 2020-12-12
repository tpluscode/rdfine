import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AudienceMixin } from './Audience';

export interface PeopleAudience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Audience<D>, RdfResource<D> {
  healthCondition: Schema.MedicalCondition<D> | undefined;
  requiredGender: string | undefined;
  requiredMaxAge: number | undefined;
  requiredMinAge: number | undefined;
  suggestedGender: string | undefined;
  suggestedMaxAge: number | undefined;
  suggestedMinAge: number | undefined;
}

export function PeopleAudienceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PeopleAudience> & RdfResourceCore> & Base {
  @namespace(schema)
  class PeopleAudienceClass extends AudienceMixin(Resource) implements Partial<PeopleAudience> {
    @property.resource()
    healthCondition: Schema.MedicalCondition | undefined;
    @property.literal()
    requiredGender: string | undefined;
    @property.literal({ type: Number })
    requiredMaxAge: number | undefined;
    @property.literal({ type: Number })
    requiredMinAge: number | undefined;
    @property.literal()
    suggestedGender: string | undefined;
    @property.literal({ type: Number })
    suggestedMaxAge: number | undefined;
    @property.literal({ type: Number })
    suggestedMinAge: number | undefined;
  }
  return PeopleAudienceClass
}

class PeopleAudienceImpl extends PeopleAudienceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PeopleAudience>) {
    super(arg, init)
    this.types.add(schema.PeopleAudience)
  }

  static readonly __mixins: Mixin[] = [PeopleAudienceMixin, AudienceMixin];
}
PeopleAudienceMixin.appliesTo = schema.PeopleAudience
PeopleAudienceMixin.Class = PeopleAudienceImpl
