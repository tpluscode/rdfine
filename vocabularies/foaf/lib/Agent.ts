import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { foaf } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '..';

export interface Agent<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
  account: Foaf.OnlineAccount<SiblingNode<ID>> | undefined;
  age: RDF.Literal | undefined;
  aimChatID: RDF.Literal | undefined;
  birthday: RDF.Literal | undefined;
  gender: RDF.Literal | undefined;
  holdsAccount: Foaf.OnlineAccount<SiblingNode<ID>> | undefined;
  icqChatID: RDF.Literal | undefined;
  interest: Foaf.Document<SiblingNode<ID>> | undefined;
  jabberID: RDF.Literal | undefined;
  made: RDF.NamedNode | undefined;
  mbox: RDF.NamedNode | undefined;
  'mbox_sha1sum': RDF.Literal | undefined;
  msnChatID: RDF.Literal | undefined;
  openid: Foaf.Document<SiblingNode<ID>> | undefined;
  skypeID: RDF.Literal | undefined;
  status: RDF.Literal | undefined;
  tipjar: Foaf.Document<SiblingNode<ID>> | undefined;
  'topic_interest': RDF.NamedNode | undefined;
  weblog: Foaf.Document<SiblingNode<ID>> | undefined;
  yahooChatID: RDF.Literal | undefined;
}

export function AgentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(foaf)
  class AgentClass extends Resource implements Agent {
    @property.resource({ implicitTypes: [foaf.OnlineAccount] })
    account: Foaf.OnlineAccount | undefined;
    @property()
    age: RDF.Literal | undefined;
    @property()
    aimChatID: RDF.Literal | undefined;
    @property()
    birthday: RDF.Literal | undefined;
    @property()
    gender: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [foaf.OnlineAccount] })
    holdsAccount: Foaf.OnlineAccount | undefined;
    @property()
    icqChatID: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
    interest: Foaf.Document | undefined;
    @property()
    jabberID: RDF.Literal | undefined;
    @property()
    made: RDF.NamedNode | undefined;
    @property()
    mbox: RDF.NamedNode | undefined;
    @property()
    'mbox_sha1sum': RDF.Literal | undefined;
    @property()
    msnChatID: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
    openid: Foaf.Document | undefined;
    @property()
    skypeID: RDF.Literal | undefined;
    @property()
    status: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
    tipjar: Foaf.Document | undefined;
    @property()
    'topic_interest': RDF.NamedNode | undefined;
    @property.resource({ implicitTypes: [foaf.Document] })
    weblog: Foaf.Document | undefined;
    @property()
    yahooChatID: RDF.Literal | undefined;
  }
  return AgentClass
}

class AgentImpl extends AgentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Agent>) {
    super(arg, init)
    this.types.add(foaf.Agent)
  }

  static readonly __mixins: Mixin[] = [AgentMixin];
}
AgentMixin.appliesTo = foaf.Agent
AgentMixin.Class = AgentImpl
