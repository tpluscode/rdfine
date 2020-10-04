import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Audience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  audienceType: string | undefined;
  geographicArea: Schema.AdministrativeArea<D> | undefined;
}

export function AudienceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AudienceClass extends IntangibleMixin(Resource) implements Audience {
    @property.literal()
    audienceType: string | undefined;
    @property.resource()
    geographicArea: Schema.AdministrativeArea | undefined;
  }
  return AudienceClass
}

class AudienceImpl extends AudienceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Audience>) {
    super(arg, init)
    this.types.add(schema.Audience)
  }

  static readonly __mixins: Mixin[] = [AudienceMixin, IntangibleMixin];
}
AudienceMixin.appliesTo = schema.Audience
AudienceMixin.Class = AudienceImpl
