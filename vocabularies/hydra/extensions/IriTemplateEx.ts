import type { Constructor, RdfResource } from '@tpluscode/rdfine'
import { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { AnyPointer } from 'clownface'
import type { IriTemplate } from '..'
import { hydra } from '@tpluscode/rdf-ns-builders'
import { TemplateExpander } from './TemplateExpander'

export interface IriTemplateEx {
  expand(model: AnyPointer | RdfResource): string;
}

declare module '@rdfine/hydra' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface IriTemplate extends IriTemplateEx {
  }
}

export function IriTemplateExMixin<Base extends Constructor<Partial<Omit<IriTemplate, keyof IriTemplateEx>> & RdfResourceCore>>(base: Base) {
  class IriTemplateExClass extends base implements IriTemplateEx {
    public expand(model: AnyPointer | RdfResource): string {
      return new TemplateExpander(this as any).expand(model)
    }
  }

  return IriTemplateExClass
}

IriTemplateExMixin.appliesTo = hydra.IriTemplate
