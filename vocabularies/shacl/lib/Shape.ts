import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/lib/Class';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface Shape<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
  and: Array<Sh.Shape<SiblingNode<ID>>>;
  class: Rdfs.Class<SiblingNode<ID>> | undefined;
  closed: boolean | undefined;
  in: Array<RDF.Term>;
  node: Sh.NodeShape<SiblingNode<ID>> | undefined;
  nodeKind: Sh.NodeKind | undefined;
  or: Array<Sh.Shape<SiblingNode<ID>>>;
  property: Array<Sh.PropertyShape<SiblingNode<ID>>>;
  rule: Sh.Rule<SiblingNode<ID>> | undefined;
  severity: Sh.Severity<SiblingNode<ID>> | undefined;
  sparql: Sh.SPARQLConstraint<SiblingNode<ID>> | undefined;
  target: Sh.Target<SiblingNode<ID>> | undefined;
  targetClass: Array<Rdfs.Class<SiblingNode<ID>>>;
  targetNode: Array<RDF.Term>;
  targetObjectsOf: Rdf.Property<SiblingNode<ID>> | undefined;
  targetSubjectsOf: Rdf.Property<SiblingNode<ID>> | undefined;
  xone: Array<Sh.Shape<SiblingNode<ID>>>;
}

export function ShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ShapeClass extends RdfsResourceMixin(Resource) implements Shape {
    @property.resource({ values: 'list', as: [ShapeMixin] })
    and!: Array<Sh.Shape>;
    @property.resource({ as: [RdfsClassMixin] })
    class: Rdfs.Class | undefined;
    @property.literal({ type: Boolean })
    closed: boolean | undefined;
    @property({ values: 'list' })
    in!: Array<RDF.Term>;
    @property.resource({ implicitTypes: [sh.NodeShape] })
    node: Sh.NodeShape | undefined;
    @property()
    nodeKind: Sh.NodeKind | undefined;
    @property.resource({ values: 'list', as: [ShapeMixin] })
    or!: Array<Sh.Shape>;
    @property.resource({ values: 'array', implicitTypes: [sh.PropertyShape] })
    property!: Array<Sh.PropertyShape>;
    @property.resource({ implicitTypes: [sh.Rule] })
    rule: Sh.Rule | undefined;
    @property.resource({ implicitTypes: [sh.Severity] })
    severity: Sh.Severity | undefined;
    @property.resource({ implicitTypes: [sh.SPARQLConstraint] })
    sparql: Sh.SPARQLConstraint | undefined;
    @property.resource({ implicitTypes: [sh.Target] })
    target: Sh.Target | undefined;
    @property.resource({ values: 'array', as: [RdfsClassMixin] })
    targetClass!: Array<Rdfs.Class>;
    @property({ values: 'array' })
    targetNode!: Array<RDF.Term>;
    @property.resource({ as: [RdfPropertyMixin] })
    targetObjectsOf: Rdf.Property | undefined;
    @property.resource({ as: [RdfPropertyMixin] })
    targetSubjectsOf: Rdf.Property | undefined;
    @property.resource({ values: 'list', as: [ShapeMixin] })
    xone!: Array<Sh.Shape>;
  }
  return ShapeClass
}

class ShapeImpl extends ShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Shape>) {
    super(arg, init)
    this.types.add(sh.Shape)
  }

  static readonly __mixins: Mixin[] = [ShapeMixin, RdfsResourceMixin];
}
ShapeMixin.appliesTo = sh.Shape
ShapeMixin.Class = ShapeImpl
