import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sioc } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sioc from '..';
import { SpaceMixin } from './Space';

export interface Site<ID extends ResourceNode = ResourceNode> extends Sioc.Space<ID>, RdfResource<ID> {
  'has_administrator': Sioc.UserAccount<SiblingNode<ID>> | undefined;
  'host_of': Sioc.Container<SiblingNode<ID>> | undefined;
}

export function SiteMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sioc)
  class SiteClass extends SpaceMixin(Resource) implements Site {
    @property.resource({ implicitTypes: [sioc.UserAccount] })
    'has_administrator': Sioc.UserAccount | undefined;
    @property.resource({ implicitTypes: [sioc.Container] })
    'host_of': Sioc.Container | undefined;
  }
  return SiteClass
}

class SiteImpl extends SiteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Site>) {
    super(arg, init)
    this.types.add(sioc.Site)
  }

  static readonly __mixins: Mixin[] = [SiteMixin, SpaceMixin];
}
SiteMixin.appliesTo = sioc.Site
SiteMixin.Class = SiteImpl
