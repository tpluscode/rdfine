import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';

export interface NodeKind extends Rdfs.Resource, RdfResource {
}

export function NodeKindMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class NodeKindClass extends RdfsResourceMixin(Resource) implements NodeKind {
  }
  return NodeKindClass
}

class NodeKindImpl extends NodeKindMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NodeKind>) {
    super(arg, init)
    this.types.add(sh.NodeKind)
  }

  static readonly __mixins: Mixin[] = [NodeKindMixin, RdfsResourceMixin];
}
NodeKindMixin.appliesTo = sh.NodeKind
NodeKindMixin.Class = NodeKindImpl
