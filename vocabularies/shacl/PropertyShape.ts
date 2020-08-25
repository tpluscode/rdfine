import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';
import * as Rdf from '@rdfine/rdf';
import { ShapeMixin } from './Shape';

export interface PropertyShape extends Sh.Shape, RdfResource {
  datatype: Rdfs.Datatype;
  defaultValue: RDF.Term;
  description: string;
  disjoint: Rdf.Property;
  flags: string;
  group: Sh.PropertyGroup;
  hasValue: RDF.Term;
  languageIn: Array<string>;
  lessThan: Rdf.Property;
  lessThanOrEquals: Rdf.Property;
  maxCount: number;
  maxExclusive: number;
  maxInclusive: number;
  maxLength: number;
  minCount: number;
  minExclusive: number;
  minInclusive: number;
  minLength: number;
  name: string;
  path: Rdfs.Resource | Array<Rdfs.Resource>;
  pattern: string;
  uniqueLang: boolean;
}

export function PropertyShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PropertyShapeClass extends ShapeMixin(Resource) implements PropertyShape {
    @property.resource({ as: [Rdfs.DatatypeMixin] })
    datatype!: Rdfs.Datatype;
    @property()
    defaultValue!: RDF.Term;
    @property.literal()
    description!: string;
    @property.resource({ as: [Rdf.PropertyMixin] })
    disjoint!: Rdf.Property;
    @property.literal()
    flags!: string;
    @property.resource({ implicitTypes: [sh.PropertyGroup] })
    group!: Sh.PropertyGroup;
    @property()
    hasValue!: RDF.Term;
    @property.literal({ values: 'list' })
    languageIn!: Array<string>;
    @property.resource({ as: [Rdf.PropertyMixin] })
    lessThan!: Rdf.Property;
    @property.resource({ as: [Rdf.PropertyMixin] })
    lessThanOrEquals!: Rdf.Property;
    @property.literal({ type: Number })
    maxCount!: number;
    @property.literal({ type: Number })
    maxExclusive!: number;
    @property.literal({ type: Number })
    maxInclusive!: number;
    @property.literal({ type: Number })
    maxLength!: number;
    @property.literal({ type: Number })
    minCount!: number;
    @property.literal({ type: Number })
    minExclusive!: number;
    @property.literal({ type: Number })
    minInclusive!: number;
    @property.literal({ type: Number })
    minLength!: number;
    @property.literal()
    name!: string;
    @property.resource({ values: ['list', 'single'], as: [Rdfs.ResourceMixin] })
    path!: Rdfs.Resource | Array<Rdfs.Resource>;
    @property.literal()
    pattern!: string;
    @property.literal({ type: Boolean })
    uniqueLang!: boolean;
  }
  return PropertyShapeClass
}

class PropertyShapeImpl extends PropertyShapeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PropertyShape>) {
    super(arg, init)
    this.types.add(sh.PropertyShape)
  }

  static readonly __mixins: Mixin[] = [PropertyShapeMixin, ShapeMixin];
}
PropertyShapeMixin.appliesTo = sh.PropertyShape
PropertyShapeMixin.Class = PropertyShapeImpl
