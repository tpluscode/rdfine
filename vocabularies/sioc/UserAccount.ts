import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '.';
import * as Foaf from '@rdfine/foaf';

export interface UserAccount<D extends RDF.DatasetCore = RDF.DatasetCore> extends Foaf.OnlineAccount<D>, RdfResource<D> {
  'account_of': Foaf.Agent<D> | undefined;
  'administrator_of': Sioc.Site<D> | undefined;
  avatar: RDF.Term | undefined;
  'creator_of': RDF.Term | undefined;
  email: RDF.Term | undefined;
  'email_sha1': RDF.Literal | undefined;
  'first_name': RDF.Literal | undefined;
  follows: Sioc.UserAccount<D> | undefined;
  'last_name': RDF.Literal | undefined;
  'member_of': Sioc.Usergroup<D> | undefined;
  'moderator_of': Sioc.Forum<D> | undefined;
  'modifier_of': RDF.Term | undefined;
  'owner_of': RDF.Term | undefined;
  'subscriber_of': Sioc.Container<D> | undefined;
}

export function UserAccountMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sioc)
  class UserAccountClass extends Foaf.OnlineAccountMixin(Resource) implements UserAccount {
    @property.resource({ as: [Foaf.AgentMixin] })
    'account_of': Foaf.Agent | undefined;
    @property.resource({ implicitTypes: [sioc.Site] })
    'administrator_of': Sioc.Site | undefined;
    @property()
    avatar: RDF.Term | undefined;
    @property()
    'creator_of': RDF.Term | undefined;
    @property()
    email: RDF.Term | undefined;
    @property()
    'email_sha1': RDF.Literal | undefined;
    @property()
    'first_name': RDF.Literal | undefined;
    @property.resource({ as: [UserAccountMixin] })
    follows: Sioc.UserAccount | undefined;
    @property()
    'last_name': RDF.Literal | undefined;
    @property.resource({ implicitTypes: [sioc.Usergroup] })
    'member_of': Sioc.Usergroup | undefined;
    @property.resource({ implicitTypes: [sioc.Forum] })
    'moderator_of': Sioc.Forum | undefined;
    @property()
    'modifier_of': RDF.Term | undefined;
    @property()
    'owner_of': RDF.Term | undefined;
    @property.resource({ implicitTypes: [sioc.Container] })
    'subscriber_of': Sioc.Container | undefined;
  }
  return UserAccountClass
}

class UserAccountImpl extends UserAccountMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserAccount>) {
    super(arg, init)
    this.types.add(sioc.UserAccount)
  }

  static readonly __mixins: Mixin[] = [UserAccountMixin, Foaf.OnlineAccountMixin];
}
UserAccountMixin.appliesTo = sioc.UserAccount
UserAccountMixin.Class = UserAccountImpl