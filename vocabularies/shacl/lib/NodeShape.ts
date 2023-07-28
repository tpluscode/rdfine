import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { ShapeMixin } from './Shape.js';

export interface NodeShape<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Shape<D>, rdfine.RdfResource<D> {
  ignoredProperties: Array<RDF.Term>;
}

export function NodeShapeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<NodeShape & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class NodeShapeClass extends ShapeMixin(Resource) {
    @rdfine.property({ values: 'list' })
    ignoredProperties!: Array<RDF.Term>;
  }
  return NodeShapeClass as any
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

export const fromPointer = createFactory<NodeShape>([ShapeMixin, NodeShapeMixin], { types: [sh.NodeShape] });
