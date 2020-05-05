import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { owl } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Owl from '.';
import type * as Rdfs from '@rdfine/rdfs';
import type * as Rdf from '@rdfine/rdf';
import { ClassMixin as RdfsClassMixin } from '@rdfine/rdfs/Class';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/Resource';
import { DatatypeMixin as RdfsDatatypeMixin } from '@rdfine/rdfs/Datatype';
import { ListMixin as RdfListMixin } from '@rdfine/rdf/List';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/Property';
import { ClassMixin } from './Class';

export interface Restriction extends Owl.Class, RdfResource {
  allValuesFrom: Rdfs.Class;
  cardinality: number;
  hasSelf: Rdfs.Resource;
  hasValue: Rdfs.Resource;
  maxCardinality: number;
  maxQualifiedCardinality: number;
  minCardinality: number;
  minQualifiedCardinality: number;
  onClass: Owl.Class;
  onDataRange: Rdfs.Datatype;
  onProperties: Rdf.List;
  onProperty: Rdf.Property;
  qualifiedCardinality: number;
  someValuesFrom: Rdfs.Class;
}

export function RestrictionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(owl)
  class RestrictionClass extends ClassMixin(Resource) implements Restriction {
    @property.resource({ as: [RdfsClassMixin] })
    allValuesFrom!: Rdfs.Class;
    @property.literal({ type: Number })
    cardinality!: number;
    @property.resource({ as: [RdfsResourceMixin] })
    hasSelf!: Rdfs.Resource;
    @property.resource({ as: [RdfsResourceMixin] })
    hasValue!: Rdfs.Resource;
    @property.literal({ type: Number })
    maxCardinality!: number;
    @property.literal({ type: Number })
    maxQualifiedCardinality!: number;
    @property.literal({ type: Number })
    minCardinality!: number;
    @property.literal({ type: Number })
    minQualifiedCardinality!: number;
    @property.resource({ implicitTypes: [owl.Class] })
    onClass!: Owl.Class;
    @property.resource({ as: [RdfsDatatypeMixin] })
    onDataRange!: Rdfs.Datatype;
    @property.resource({ as: [RdfListMixin] })
    onProperties!: Rdf.List;
    @property.resource({ as: [RdfPropertyMixin] })
    onProperty!: Rdf.Property;
    @property.literal({ type: Number })
    qualifiedCardinality!: number;
    @property.resource({ as: [RdfsClassMixin] })
    someValuesFrom!: Rdfs.Class;
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
