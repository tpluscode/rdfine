import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { RoleMixin } from './Role';

export interface LinkRole<ID extends ResourceNode = ResourceNode> extends Schema.Role<ID>, RdfResource<ID> {
  inLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  inLanguageLiteral: string | undefined;
  linkRelationship: string | undefined;
}

export function LinkRoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LinkRoleClass extends RoleMixin(Resource) implements LinkRole {
    @property.resource()
    inLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral: string | undefined;
    @property.literal()
    linkRelationship: string | undefined;
  }
  return LinkRoleClass
}

class LinkRoleImpl extends LinkRoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LinkRole>) {
    super(arg, init)
    this.types.add(schema.LinkRole)
  }

  static readonly __mixins: Mixin[] = [LinkRoleMixin, RoleMixin];
}
LinkRoleMixin.appliesTo = schema.LinkRole
LinkRoleMixin.Class = LinkRoleImpl
