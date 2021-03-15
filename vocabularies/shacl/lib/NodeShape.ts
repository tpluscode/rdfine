import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import { ShapeMixin } from './Shape';

export interface NodeShape<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Shape<D>, RdfResource<D> {
  ignoredProperties: Array<RDF.Term>;
}

export function NodeShapeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NodeShape> & RdfResourceCore> & Base {
  @namespace(sh)
  class NodeShapeClass extends ShapeMixin(Resource) implements Partial<NodeShape> {
    @property({ values: 'list' })
    ignoredProperties!: Array<RDF.Term>;
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

export const fromPointer = createFactory<NodeShape>([ShapeMixin, NodeShapeMixin], { types: [sh.NodeShape] });
