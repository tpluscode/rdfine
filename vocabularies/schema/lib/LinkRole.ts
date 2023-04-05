import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { RoleMixin } from './Role';

export interface LinkRole<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Role<D>, RdfResource<D> {
  inLanguage: Schema.Language<D> | undefined;
  inLanguageLiteral: string | undefined;
  linkRelationship: string | undefined;
}

export function LinkRoleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LinkRole> & RdfResourceCore> & Base {
  @namespace(schema)
  class LinkRoleClass extends RoleMixin(Resource) implements Partial<LinkRole> {
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

export const fromPointer = createFactory<LinkRole>([RoleMixin, LinkRoleMixin], { types: [schema.LinkRole] });
