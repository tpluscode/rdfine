import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';
import PropertyShapeMixin from './PropertyShape';
import RuleMixin from './Rule';
import SeverityMixin from './Severity';
import SPARQLConstraintMixin from './SPARQLConstraint';
import TargetMixin from './Target';
import RdfsClassMixin from '@rdfine/rdfs/Class';
import RdfPropertyMixin from '@rdfine/rdf/Property';

export interface Shape extends Rdfs.Resource, RdfResource {
  property: Array<Sh.PropertyShape>;
  rule: Sh.Rule;
  severity: Sh.Severity;
  sparql: Sh.SPARQLConstraint;
  target: Sh.Target;
  targetClass: Rdfs.Class;
  targetNode: RDF.Term;
  targetObjectsOf: Rdf.Property;
  targetSubjectsOf: Rdf.Property;
}

export default function ShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ShapeClass extends RdfsResourceMixin(Resource) implements Shape {
    @property.resource({ values: 'array', as: [PropertyShapeMixin] })
    property!: Array<Sh.PropertyShape>;
    @property.resource({ as: [RuleMixin] })
    rule!: Sh.Rule;
    @property.resource({ as: [SeverityMixin] })
    severity!: Sh.Severity;
    @property.resource({ as: [SPARQLConstraintMixin] })
    sparql!: Sh.SPARQLConstraint;
    @property.resource({ as: [TargetMixin] })
    target!: Sh.Target;
    @property.resource({ as: [RdfsClassMixin] })
    targetClass!: Rdfs.Class;
    @property()
    targetNode!: RDF.Term;
    @property.resource({ as: [RdfPropertyMixin] })
    targetObjectsOf!: Rdf.Property;
    @property.resource({ as: [RdfPropertyMixin] })
    targetSubjectsOf!: Rdf.Property;
  }
  return ShapeClass
}

class ShapeImpl extends ShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Shape>) {
    super(arg, init)
    this.types.add(sh.Shape)
  }
}
ShapeMixin.shouldApply = (r: RdfResource) => r.types.has(sh.Shape)
ShapeMixin.Class = ShapeImpl
