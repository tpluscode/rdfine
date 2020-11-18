import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import type * as Rdf from '@rdfine/rdf';
import { ResourceMixin } from './Resource';
import { PropertyMixin as RdfPropertyMixin } from '@rdfine/rdf/lib/Property';

export interface IriTemplateMapping<D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, RdfResource<D> {
  property: Rdf.Property<D> | undefined;
  required: boolean | undefined;
  variable: string | undefined;
  variableRepresentation: Hydra.VariableRepresentation<D> | undefined;
}

export function IriTemplateMappingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class IriTemplateMappingClass extends ResourceMixin(Resource) implements IriTemplateMapping {
    @property.resource({ as: [RdfPropertyMixin] })
    property: Rdf.Property | undefined;
    @property.literal({ type: Boolean })
    required: boolean | undefined;
    @property.literal()
    variable: string | undefined;
    @property.resource({ implicitTypes: [hydra.VariableRepresentation] })
    variableRepresentation: Hydra.VariableRepresentation | undefined;
  }
  return IriTemplateMappingClass
}

class IriTemplateMappingImpl extends IriTemplateMappingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IriTemplateMapping>) {
    super(arg, init)
    this.types.add(hydra.IriTemplateMapping)
  }

  static readonly __mixins: Mixin[] = [IriTemplateMappingMixin, ResourceMixin];
}
IriTemplateMappingMixin.appliesTo = hydra.IriTemplateMapping
IriTemplateMappingMixin.Class = IriTemplateMappingImpl
