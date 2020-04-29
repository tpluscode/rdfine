import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import { ShapeMixin } from './Shape';

export interface NodeShape extends Sh.Shape, RdfResource {
}

export function NodeShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class NodeShapeClass extends ShapeMixin(Resource) implements NodeShape {
  }
  return NodeShapeClass
}

class NodeShapeImpl extends NodeShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NodeShape>) {
    super(arg, init)
    this.types.add(sh.NodeShape)
  }
}
NodeShapeMixin.shouldApply = (r: RdfResource) => r.types.has(sh.NodeShape)
NodeShapeMixin.Class = NodeShapeImpl
