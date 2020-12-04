import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { ShapeMixin } from './Shape';

export interface NodeShape<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Shape<D>, RdfResource<D> {
}

export function NodeShapeMixin<Base extends Constructor>(Resource: Base): Constructor<NodeShape> & Base {
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

  static readonly __mixins: Mixin[] = [NodeShapeMixin, ShapeMixin];
}
NodeShapeMixin.appliesTo = sh.NodeShape
NodeShapeMixin.Class = NodeShapeImpl
