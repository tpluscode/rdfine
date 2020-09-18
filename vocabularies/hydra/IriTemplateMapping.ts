import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '.';
import * as Rdf from '@rdfine/rdf';
import { ResourceMixin } from './Resource';

export interface IriTemplateMapping extends Hydra.Resource, RdfResource {
  property: Rdf.Property | undefined;
  required: boolean | undefined;
  variable: string | undefined;
  variableRepresentation: Hydra.VariableRepresentation | undefined;
}

export function IriTemplateMappingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class IriTemplateMappingClass extends ResourceMixin(Resource) implements IriTemplateMapping {
    @property.resource({ as: [Rdf.PropertyMixin] })
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
