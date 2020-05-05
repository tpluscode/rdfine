import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Permit extends Schema.Intangible, RdfResource {
  issuedBy: Schema.Organization;
  issuedThrough: Schema.Service;
  permitAudience: Schema.Audience;
  validFor: Schema.Duration;
  validFrom: Date;
  validIn: Schema.AdministrativeArea;
  validUntil: Date;
}

export function PermitMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PermitClass extends IntangibleMixin(Resource) implements Permit {
    @property.resource()
    issuedBy!: Schema.Organization;
    @property.resource()
    issuedThrough!: Schema.Service;
    @property.resource()
    permitAudience!: Schema.Audience;
    @property.resource()
    validFor!: Schema.Duration;
    @property.literal()
    validFrom!: Date;
    @property.resource()
    validIn!: Schema.AdministrativeArea;
    @property.literal()
    validUntil!: Date;
  }
  return PermitClass
}

class PermitImpl extends PermitMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Permit>) {
    super(arg, init)
    this.types.add(schema.Permit)
  }

  static readonly __mixins: Mixin[] = [PermitMixin, IntangibleMixin];
}
PermitMixin.appliesTo = schema.Permit
PermitMixin.Class = PermitImpl
