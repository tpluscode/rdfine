import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import * as Rdfs from '@rdfine/rdfs';
import * as Rdf from '@rdfine/rdf';
import { ClassMixin } from './Class';

export interface Restriction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Owl.Class<D>, RdfResource<D> {
  allValuesFrom: Rdfs.Class<D> | undefined;
  cardinality: number | undefined;
  hasSelf: Rdfs.Resource<D> | undefined;
  hasValue: Rdfs.Resource<D> | undefined;
  maxCardinality: number | undefined;
  maxQualifiedCardinality: number | undefined;
  minCardinality: number | undefined;
  minQualifiedCardinality: number | undefined;
  onClass: Owl.Class<D> | undefined;
  onDataRange: Rdfs.Datatype<D> | undefined;
  onProperties: Rdf.List<D> | undefined;
  onProperty: Rdf.Property<D> | undefined;
  qualifiedCardinality: number | undefined;
  someValuesFrom: Rdfs.Class<D> | undefined;
}

export function RestrictionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class RestrictionClass extends ClassMixin(Resource) implements Restriction {
    @property.resource({ as: [Rdfs.ClassMixin] })
    allValuesFrom: Rdfs.Class | undefined;
    @property.literal({ type: Number })
    cardinality: number | undefined;
    @property.resource({ as: [Rdfs.ResourceMixin] })
    hasSelf: Rdfs.Resource | undefined;
    @property.resource({ as: [Rdfs.ResourceMixin] })
    hasValue: Rdfs.Resource | undefined;
    @property.literal({ type: Number })
    maxCardinality: number | undefined;
    @property.literal({ type: Number })
    maxQualifiedCardinality: number | undefined;
    @property.literal({ type: Number })
    minCardinality: number | undefined;
    @property.literal({ type: Number })
    minQualifiedCardinality: number | undefined;
    @property.resource({ implicitTypes: [owl.Class] })
    onClass: Owl.Class | undefined;
    @property.resource({ as: [Rdfs.DatatypeMixin] })
    onDataRange: Rdfs.Datatype | undefined;
    @property.resource({ as: [Rdf.ListMixin] })
    onProperties: Rdf.List | undefined;
    @property.resource({ as: [Rdf.PropertyMixin] })
    onProperty: Rdf.Property | undefined;
    @property.literal({ type: Number })
    qualifiedCardinality: number | undefined;
    @property.resource({ as: [Rdfs.ClassMixin] })
    someValuesFrom: Rdfs.Class | undefined;
  }
  return RestrictionClass
}

class RestrictionImpl extends RestrictionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Restriction>) {
    super(arg, init)
    this.types.add(owl.Restriction)
  }

  static readonly __mixins: Mixin[] = [RestrictionMixin, ClassMixin];
}
RestrictionMixin.appliesTo = owl.Restriction
RestrictionMixin.Class = RestrictionImpl
