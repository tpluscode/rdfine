import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Hydra from '.';
import type * as Rdf from '@rdfine/rdf';
import ResourceMixin from './Resource';
import RdfPropertyMixin from '@rdfine/rdf/Property';
import VariableRepresentationMixin from './VariableRepresentation';

export interface IriTemplateMapping extends Hydra.Resource, RdfResource {
  property: Rdf.Property;
  required: boolean;
  variable: string;
  variableRepresentation: Hydra.VariableRepresentation;
}

export default function IriTemplateMappingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class IriTemplateMappingClass extends ResourceMixin(Resource) implements IriTemplateMapping {
    @property.resource({ as: [RdfPropertyMixin] })
    property!: Rdf.Property;
    @property.literal({ type: Boolean })
    required!: boolean;
    @property.literal()
    variable!: string;
    @property.resource({ as: [VariableRepresentationMixin] })
    variableRepresentation!: Hydra.VariableRepresentation;
  }
  return IriTemplateMappingClass
}

class IriTemplateMappingImpl extends IriTemplateMappingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IriTemplateMapping>) {
    super(arg, init)
    this.types.add(hydra.IriTemplateMapping)
  }
}
IriTemplateMappingMixin.shouldApply = (r: RdfResource) => r.types.has(hydra.IriTemplateMapping)
IriTemplateMappingMixin.Class = IriTemplateMappingImpl
