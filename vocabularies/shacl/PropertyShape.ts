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
  datatype: Rdfs.Datatype | undefined;
  defaultValue: RDF.Term | undefined;
  description: string | undefined;
  disjoint: Rdf.Property | undefined;
  flags: string | undefined;
  group: Sh.PropertyGroup | undefined;
  hasValue: RDF.Term | undefined;
  languageIn: Array<string>;
  lessThan: Rdf.Property | undefined;
  lessThanOrEquals: Rdf.Property | undefined;
  maxCount: number | undefined;
  maxExclusive: number | undefined;
  maxInclusive: number | undefined;
  maxLength: number | undefined;
  minCount: number | undefined;
  minExclusive: number | undefined;
  minInclusive: number | undefined;
  minLength: number | undefined;
  name: string | undefined;
  order: number | undefined;
  path: Rdfs.Resource | Array<Rdfs.Resource> | undefined;
  pattern: string | undefined;
  uniqueLang: boolean | undefined;
}

export function PropertyShapeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class PropertyShapeClass extends ShapeMixin(Resource) implements PropertyShape {
    @property.resource({ as: [Rdfs.DatatypeMixin] })
    datatype: Rdfs.Datatype | undefined;
    @property()
    defaultValue: RDF.Term | undefined;
    @property.literal()
    description: string | undefined;
    @property.resource({ as: [Rdf.PropertyMixin] })
    disjoint: Rdf.Property | undefined;
    @property.literal()
    flags: string | undefined;
    @property.resource({ implicitTypes: [sh.PropertyGroup] })
    group: Sh.PropertyGroup | undefined;
    @property()
    hasValue: RDF.Term | undefined;
    @property.literal({ values: 'list' })
    languageIn!: Array<string>;
    @property.resource({ as: [Rdf.PropertyMixin] })
    lessThan: Rdf.Property | undefined;
    @property.resource({ as: [Rdf.PropertyMixin] })
    lessThanOrEquals: Rdf.Property | undefined;
    @property.literal({ type: Number })
    maxCount: number | undefined;
    @property.literal({ type: Number })
    maxExclusive: number | undefined;
    @property.literal({ type: Number })
    maxInclusive: number | undefined;
    @property.literal({ type: Number })
    maxLength: number | undefined;
    @property.literal({ type: Number })
    minCount: number | undefined;
    @property.literal({ type: Number })
    minExclusive: number | undefined;
    @property.literal({ type: Number })
    minInclusive: number | undefined;
    @property.literal({ type: Number })
    minLength: number | undefined;
    @property.literal()
    name: string | undefined;
    @property.literal({ type: Number })
    order: number | undefined;
    @property.resource({ values: ['list', 'single'], as: [Rdfs.ResourceMixin] })
    path: Rdfs.Resource | Array<Rdfs.Resource> | undefined;
    @property.literal()
    pattern: string | undefined;
    @property.literal({ type: Boolean })
    uniqueLang: boolean | undefined;
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
