import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { hydra } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type { SingleContextClownface } from 'clownface';
import type { Term } from 'rdf-js';
import type * as Hydra from '.';
import { ResourceMixin } from './Resource';
import { TemplateExpander } from './lib/TemplateExpander';

export interface IriTemplate extends Hydra.Resource, RdfResource {
  mapping: Array<Hydra.IriTemplateMapping>;
  template: string;
  variableRepresentation: Term;
  expand(model: SingleContextClownface | RdfResource): string;
}

export function IriTemplateMixin<Base extends Constructor>(Resource: Base) {
  @namespace(hydra)
  class IriTemplateClass extends ResourceMixin(Resource) implements IriTemplate {
    @property.resource({ values: 'array', implicitTypes: [hydra.IriTemplateMapping] })
    mapping!: Array<Hydra.IriTemplateMapping>;
    @property.literal()
    template!: string;
    @property()
    public variableRepresentation!: Term;

    public expand(model: SingleContextClownface | RdfResource): string {
      return new TemplateExpander(this).expand(model)
    }
  }
  return IriTemplateClass
}

class IriTemplateImpl extends IriTemplateMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<IriTemplate>) {
    super(arg, init)
    this.types.add(hydra.IriTemplate)
  }

  static readonly __mixins: Mixin[] = [IriTemplateMixin, ResourceMixin];
}
IriTemplateMixin.appliesTo = hydra.IriTemplate
IriTemplateMixin.Class = IriTemplateImpl
