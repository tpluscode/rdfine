import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Audience<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  audienceType: string | undefined;
  geographicArea: Schema.AdministrativeArea<D> | undefined;
}

export function AudienceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Audience & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AudienceClass extends IntangibleMixin(Resource) {
    @rdfine.property.literal()
    audienceType: string | undefined;
    @rdfine.property.resource()
    geographicArea: Schema.AdministrativeArea | undefined;
  }
  return AudienceClass as any
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

export const fromPointer = createFactory<Audience>([IntangibleMixin, AudienceMixin], { types: [schema.Audience] });
