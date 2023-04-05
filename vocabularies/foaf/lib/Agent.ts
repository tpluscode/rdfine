import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { foaf } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Foaf from '../index.js';

export interface Agent<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  account: Foaf.OnlineAccount<D> | undefined;
  age: RDF.Literal | undefined;
  aimChatID: RDF.Literal | undefined;
  birthday: RDF.Literal | undefined;
  gender: RDF.Literal | undefined;
  holdsAccount: Foaf.OnlineAccount<D> | undefined;
  icqChatID: RDF.Literal | undefined;
  interest: Foaf.Document<D> | undefined;
  jabberID: RDF.Literal | undefined;
  made: RDF.NamedNode | undefined;
  mbox: RDF.NamedNode | undefined;
  'mbox_sha1sum': RDF.Literal | undefined;
  msnChatID: RDF.Literal | undefined;
  openid: Foaf.Document<D> | undefined;
  skypeID: RDF.Literal | undefined;
  status: RDF.Literal | undefined;
  tipjar: Foaf.Document<D> | undefined;
  'topic_interest': RDF.NamedNode | undefined;
  weblog: Foaf.Document<D> | undefined;
  yahooChatID: RDF.Literal | undefined;
}

export function AgentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Agent> & RdfResourceCore> & Base {
  @namespace(foaf)
  class AgentClass extends Resource implements Partial<Agent> {
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

export const fromPointer = createFactory<Agent>([AgentMixin], { types: [foaf.Agent] });
