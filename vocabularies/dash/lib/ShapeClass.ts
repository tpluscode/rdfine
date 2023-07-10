import '../extensions/rdfs/Class.js';
import { ClassMixinEx } from '../extensions/rdfs/Class.js';
import '../extensions/sh/NodeShape.js';
import { NodeShapeMixinEx } from '../extensions/sh/NodeShape.js';
import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Shacl from '@rdfine/shacl';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';
import { NodeShapeMixin as ShaclNodeShapeMixin } from '@rdfine/shacl/lib/NodeShape';

export interface ShapeClass<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, Shacl.NodeShape<D>, rdfine.RdfResource<D> {
}

export function ShapeClassMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ShapeClass & RdfResourceCore> & Base {
  @rdfine.namespace(dash)
  class ShapeClassClass extends NodeShapeMixinEx(ShaclNodeShapeMixin(ClassMixinEx(RdfsClassMixin(Resource)))) {
  }
  return ShapeClassClass as any
}

class ShapeClassImpl extends ShapeClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShapeClass>) {
    super(arg, init)
    this.types.add(dash.ShapeClass)
  }

  static readonly __mixins: Mixin[] = [ShapeClassMixin, RdfsClassMixin, ShaclNodeShapeMixin];
}
ShapeClassMixin.appliesTo = dash.ShapeClass
ShapeClassMixin.Class = ShapeClassImpl

export const fromPointer = createFactory<ShapeClass>([ShaclNodeShapeMixin, RdfsClassMixin, ShapeClassMixin], { types: [dash.ShapeClass] });
