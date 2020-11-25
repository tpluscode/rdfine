import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Permit<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  issuedBy: Schema.Organization<SiblingNode<ID>> | undefined;
  issuedThrough: Schema.Service<SiblingNode<ID>> | undefined;
  permitAudience: Schema.Audience<SiblingNode<ID>> | undefined;
  validFor: Schema.Duration<SiblingNode<ID>> | undefined;
  validFrom: Date | undefined;
  validIn: Schema.AdministrativeArea<SiblingNode<ID>> | undefined;
  validUntil: Date | undefined;
}

export function PermitMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PermitClass extends IntangibleMixin(Resource) implements Permit {
    @property.resource()
    issuedBy: Schema.Organization | undefined;
    @property.resource()
    issuedThrough: Schema.Service | undefined;
    @property.resource()
    permitAudience: Schema.Audience | undefined;
    @property.resource()
    validFor: Schema.Duration | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validFrom: Date | undefined;
    @property.resource()
    validIn: Schema.AdministrativeArea | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    validUntil: Date | undefined;
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
