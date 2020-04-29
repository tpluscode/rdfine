import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';
import { ShapeMixin } from './Shape';

export interface PropertyShape extends Sh.Shape, RdfResource {
  defaultValue: RDF.Term;
  description: RDF.Term;
  group: Sh.PropertyGroup;
  name: RDF.Term;
  path: Rdfs.Resource;
}

export function PropertyShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PropertyShapeClass extends ShapeMixin(Resource) implements PropertyShape {
    @property()
    defaultValue!: RDF.Term;
    @property()
    description!: RDF.Term;
    @property.resource({ implicitTypes: [sh.PropertyGroup] })
    group!: Sh.PropertyGroup;
    @property()
    name!: RDF.Term;
    @property.resource({ as: [RdfsResourceMixin] })
    path!: Rdfs.Resource;
  }
  return PropertyShapeClass
}

class PropertyShapeImpl extends PropertyShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyShape>) {
    super(arg, init)
    this.types.add(sh.PropertyShape)
  }
}
PropertyShapeMixin.shouldApply = (r: RdfResource) => r.types.has(sh.PropertyShape)
PropertyShapeMixin.Class = PropertyShapeImpl
