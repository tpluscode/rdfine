import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';

export interface NodeKind extends Rdfs.Resource, RdfResource {
}

export default function NodeKindMixin<Base extends Constructor>(Resource: Base) {
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
}
NodeKindMixin.shouldApply = (r: RdfResource) => r.types.has(sh.NodeKind)
NodeKindMixin.Class = NodeKindImpl
