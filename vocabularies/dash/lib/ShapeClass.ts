import '../extensions/rdfs/Class';
import { ClassMixinEx } from '../extensions/rdfs/Class';
import '../extensions/sh/NodeShape';
import { NodeShapeMixinEx } from '../extensions/sh/NodeShape';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Shacl from '@rdfine/shacl';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';
import { NodeShapeMixin as ShaclNodeShapeMixin } from '@rdfine/shacl/lib/NodeShape';

export interface ShapeClass<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Class<D>, Shacl.NodeShape<D>, RdfResource<D> {
}

export function ShapeClassMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ShapeClass> & RdfResourceCore> & Base {
  @namespace(dash)
  class ShapeClassClass extends NodeShapeMixinEx(ShaclNodeShapeMixin(ClassMixinEx(RdfsClassMixin(Resource)))) implements Partial<ShapeClass> {
  }
  return ShapeClassClass
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
