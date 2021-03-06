import { NodeShapeMixinEx } from '../extensions/sh';
import { ClassMixinEx } from '../extensions/rdfs';
import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { dash } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Dash from '..';
import type * as Shacl from '@rdfine/shacl';
import type * as Rdfs from '@rdfine/rdfs';
import { NodeShapeMixin as ShaclNodeShapeMixin } from '@rdfine/shacl/lib/NodeShape';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';

export interface ShapeClass<D extends RDF.DatasetCore = RDF.DatasetCore> extends Shacl.NodeShape<D>, Rdfs.Class<D>, RdfResource<D> {
}

export function ShapeClassMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ShapeClass> & RdfResourceCore> & Base {
  @namespace(dash)
  class ShapeClassClass extends ClassMixinEx(RdfsClassMixin(NodeShapeMixinEx(ShaclNodeShapeMixin(Resource)))) implements Partial<ShapeClass> {
  }
  return ShapeClassClass
}

class ShapeClassImpl extends ShapeClassMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShapeClass>) {
    super(arg, init)
    this.types.add(dash.ShapeClass)
  }

  static readonly __mixins: Mixin[] = [ShapeClassMixin, ShaclNodeShapeMixin, RdfsClassMixin];
}
ShapeClassMixin.appliesTo = dash.ShapeClass
ShapeClassMixin.Class = ShapeClassImpl

export const fromPointer = createFactory<ShapeClass>([RdfsClassMixin, ShaclNodeShapeMixin, ShapeClassMixin], { types: [dash.ShapeClass] });
